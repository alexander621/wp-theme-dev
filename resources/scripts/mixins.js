export default {
  methods: {
    range(start, stop, step = 1) {
      var a = [start],
        b = start;
      step = step || 1;
      while (b < stop) {
        a.push((b += step));
      }
      return a;
    },
    componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },
    hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) : null;
    },
    capitalizeWord(tag) {
      let lower = tag.toLowerCase();
      let lowerArr = lower.split(" ");
      let finalArr = [];
      for (let i = 0; i < lowerArr.length; i++) {
        finalArr.push(
          lowerArr[i].charAt(0).toUpperCase() + lowerArr[i].slice(1)
        );
      }
      return finalArr.join("");
    },
    groupBy(list, keyGetter) {
      const map = new Map();
      list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });
      return Array.from(map, ([name, value]) => ({
        name,
        value,
      }));
    },
    generateBreadCrumb(data) {
      let html = "";
      data.forEach((item, key) => {
        // console.log(item,key);
        if (key != 0) {
          html += '<span class = "mb-2" > > </span>';
        }
        if (item.url != false && item.url != null)
          html += `<a href="${item.url}" class="btn-link">${item.label}</a>`;
        else html += item.label;
      });
      return html;
    },
  }
};
