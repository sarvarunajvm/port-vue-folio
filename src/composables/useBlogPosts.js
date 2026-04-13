import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useBlogPosts(username = 'sarvarunajvm', limit = 3) {
  const posts = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const { data } = await axios.get(
        `https://dev.to/api/articles?username=${username}&per_page=${limit}`
      )
      posts.value = data.map((post) => ({
        id: post.id,
        title: post.title,
        url: post.url,
        date: new Date(post.published_at).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        readingTime: post.reading_time_minutes,
        tags: post.tag_list?.slice(0, 3) || [],
        reactions: post.positive_reactions_count || 0,
        comments: post.comments_count || 0,
      }))
    } catch {
      // Silently fail — blog posts are supplementary
    } finally {
      loading.value = false
    }
  })

  return { posts, loading }
}
