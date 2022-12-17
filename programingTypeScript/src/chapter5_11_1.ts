export default null

// ファクトリーパターン
type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose =  'dancing'
}

class Boot implements Shoe {
    purpose =  'woodcutting'
}

class Sneaker implements Shoe {
    purpose =  'walking'
}

// let Shoe = {
//     create(type: ) [

//     ]
// }
