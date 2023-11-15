<script>
    import { Gallery } from 'flowbite-svelte';
    export let data
    const images = data.images
    const sliceSize = images.length / 4
    const images1 = data.images.slice(0, sliceSize)
    const images2 = data.images.slice(sliceSize, sliceSize * 2)
    const images3 = data.images.slice(sliceSize * 2, sliceSize * 3)
    const images4 = data.images.slice(sliceSize * 3, images.length)
  </script>
  
  <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
    <Gallery items={images1} />
    <Gallery items={images2} />
    <Gallery items={images3} />
    <Gallery items={images4} />
  </Gallery>