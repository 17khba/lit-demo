# 基于 [Lit](https://github.com/lit/lit/) 开发的 Rss list 组件

## Install

```sh
npm i rss-list
```

## Usage

```ts
<!-- App.svelte -->
<script lang="ts">
  import "rss-list";
  import rssListData from "./data/rss-list.json";
</script>

<main>
  <rss-list data={rssListData} />
</main>
```
