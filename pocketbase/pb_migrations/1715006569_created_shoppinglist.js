/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3mv593ieqawcouz",
    "created": "2024-05-06 14:42:49.061Z",
    "updated": "2024-05-06 14:42:49.061Z",
    "name": "shoppinglist",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u13k0nxy",
        "name": "active",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "pinqrobn",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "l6vkoreu",
        "name": "inCart",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "u7ot6v3e",
        "name": "article",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": true,
        "options": {
          "min": 1,
          "max": 120,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mk1md3hr",
        "name": "shop",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 80,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3mv593ieqawcouz");

  return dao.deleteCollection(collection);
})
