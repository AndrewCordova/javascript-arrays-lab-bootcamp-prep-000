const app = "I don't do much."
var kittens = ["milo", "Otis", "Garfield"];

destructivelyAppendKitten(kittens) {
  kittens.push(kittens)
  return kittens
}
