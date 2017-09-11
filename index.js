const app = "I don't do much."
var kittens = ["milo", "Otis", "Garfield"];

destructivelyAppendKitten("Kitty") {
  kittens.unshift("Kitty")
  return kittens
}
