/* eslint-disable import/prefer-default-export */
import { join } from 'path'
import mongoose from 'mongoose'
import glob from 'glob'

mongoose.Promise = global.Promise
const db = 'mongodb://localhost/test'
glob.sync(join(__dirname, '../database/schema', '**/*.js')).forEach(require)

export const database = () => {
  mongoose.connect(db, {
    useMongoClient: true
  })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(db, {
      useMongoClient: true
    })
  })

  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB -> ', db)
  })
}
