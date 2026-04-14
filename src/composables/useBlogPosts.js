import { ref, onMounted } from 'vue'

export function useBlogPosts(username = 'sarvarunajvm', limit = 3) {
  const posts = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=${limit}`)
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
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
