<template>
  <div class="dark:bg-blue-900 dark:text-white p-4 py-20">
    <div></div>
    <h1 class="text-6xl font-bold my-8">Create NFT track</h1>
    <form action="" class="flex flex-col space-y-4">
      <div class="my-8">
        <label class="text-2xl font-bold">Upload File</label>
        <input
          type="file"
          placeholder="upload image"
          class="border dark:border-gray-500 border-black/50 p-2 my-4 bg-green-500 text-white rounded-xl w-full"
        />
      </div>
      <label class="text-2xl font-bold">Track info</label>
      <div class="grid lg:grid-cols-2 gap-4">
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Title"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Artist"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="Album"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
        </div>
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Website"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="Song Key"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
          <input
            type="text"
            placeholder="BPM"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
        </div>
      </div>

      <!-- WRITERS -->
      <textarea
        type="text"
        placeholder="description"
        class="border dark:border-gray-500 border-black/50 p-2 rounded-xl h-64"
      />
      <!-- TAGS -->
      <!-- CATEGORY -->
      <!-- BLOCKCHAIN -->
      <label class="text-2xl font-bold">Blockchain info</label>
      <div class="grid lg:grid-cols-2 gap-4">
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="NFT id"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
        </div>
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Date"
            class="border dark:border-gray-500 border-black/50 p-2 rounded-xl"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script></script>

<style></style>
