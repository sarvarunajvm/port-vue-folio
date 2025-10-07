<template>
  <div>
    <div v-if="loading" class="myFont body2">Loading gist...</div>
    <div v-else-if="error" class="myFont body2 tertiary--text">{{ error }}</div>
    <div v-else>
      <pre class="myFont body2" style="white-space: pre-wrap; overflow-x: auto;">
        <code v-html="content"></code>
      </pre>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import shell from 'highlight.js/lib/languages/shell';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('json', json);

const props = defineProps({
  gistId: { type: String, required: true },
  file: { type: String, required: true },
});

const loading = ref(true);
const error = ref('');
const content = ref('');

onMounted(async () => {
  try {
    const { data } = await axios.get(`https://api.github.com/gists/${props.gistId}`);
    const files = data.files || {};
    const match = files[props.file];
    if (!match || !match.raw_url) {
      error.value = 'File not found in gist';
      loading.value = false;
      return;
    }
    const resp = await axios.get(match.raw_url, { responseType: 'text' });
    const raw = typeof resp.data === 'string' ? resp.data : JSON.stringify(resp.data, null, 2);
    // Basic language detection by file extension
    const ext = (props.file.split('.').pop() || '').toLowerCase();
    const lang = ext === 'js' ? 'javascript' : ext === 'md' ? 'xml' : ext === 'sh' ? 'shell' : ext === 'json' ? 'json' : 'plaintext';
    try {
      const res = hljs.highlight(raw, { language: lang });
      content.value = res.value;
    } catch {
      content.value = raw;
    }
  } catch {
    error.value = 'Failed to load gist';
  } finally {
    loading.value = false;
  }
});
</script>
