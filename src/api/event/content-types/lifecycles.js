const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    console.log(event)
    const { data } = event.attributes;
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};