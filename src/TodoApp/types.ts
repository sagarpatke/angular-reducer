interface Item {
  itemId: string
  text: string
  isComplete: boolean
}

export default interface TodoAppState {
  title: string
  items: Item[]
}