import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("at the end of each day quality should have degraded for  one item", () => {
    const inital = new GildedRose([
      {
        name: "foo",
        sellIn: 10,
        quality: 10,
      },
    ]);
    const items = inital.updateQuality();

    expect(items[0].quality).toBe(9);
  });
});
