import { defineStore } from "pinia";
import { allRows } from "@/composables/useSheet";
import Fuse from "fuse.js";

const optionsFuse = {
  keys: ["kategori"],
};

function transformResultFilter(contents) {
  let contentsTranformed = [];
  contents.forEach((content) => {
    contentsTranformed.push(content.item);
  });

  return contentsTranformed;
}

export const useContents = defineStore("contents", {
  state: () => ({
    contents: [],
    initContents: [],
    categorySelected: "Semua",
    categories: [],
  }),
  actions: {
    async getContent() {
      this.contents = await allRows();
      this.initContents = this.contents;
    },

    async getCategory() {
      this.categories = await kategori();
    },

    async filtrContent(category) {
      this.categorySelected = category;

      if (this.categorySelected == "Semua") {
        this.contents = await allRows();
        this.initContents = this.contents;
        return;
      }

      const fuse = new Fuse(this.initContents, optionsFuse);

      // Change the pattern
      const pattern = this.categorySelected;

      const resultFiltered = fuse.search(pattern);

      this.contents = transformResultFilter(resultFiltered);
    },
  },
});
