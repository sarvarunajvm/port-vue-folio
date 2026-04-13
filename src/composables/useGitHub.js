import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useGitHub(username = 'sarvarunajvm') {
  const stats = ref({
    repos: 0,
    followers: 0,
    contributions: 0,
  })
  const loading = ref(true)

  onMounted(async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`)
      stats.value = {
        repos: data.public_repos || 0,
        followers: data.followers || 0,
        contributions: 0,
      }
    } catch {
      // Silently fail — GitHub stats are supplementary
    } finally {
      loading.value = false
    }
  })

  return { stats, loading }
}
