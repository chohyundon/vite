/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2brznysqormrut1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iph25wlb",
    "name": "photo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/webp"
      ],
      "thumbs": [
        "300x300"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2brznysqormrut1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iph25wlb",
    "name": "field",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/webp"
      ],
      "thumbs": [
        "300x300"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
