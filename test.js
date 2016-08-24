'use strict'

const t = require('tap')
const clean = require('mongo-clean')

const url = 'mongodb://localhost:27017/test'

t.plan(3)

clean(url, function (err, db) {
  if (err) {
    throw err // nothing we can do
  }

  t.tearDown(db.close.bind(db))

  const collection = db.collection('somethingtotest')

  collection.insert({ hello: 'world' }, function (err) {
    t.error(err)

    collection.find().toArray(function (err, list) {
      t.error(err)
      t.equal(list.length, 1, 'one element in the list')

      t.end()
    })
  })
})
