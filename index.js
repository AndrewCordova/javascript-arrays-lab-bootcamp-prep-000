const app = "I don't do much."
var kittens = ["milo", "Otis", "Garfield"];

destructivelyAppendKitten(name) {
  kittens.unshift(name)
  return kittens
}
