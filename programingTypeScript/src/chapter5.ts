export default null

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
    //１パラメータは自動的にthisに割り当てられる(this.file)
    //Positionの異なるインスタンス同士は互いにアクセス可能だが、その他サブクラスも含めてアクセスできない。
    constructor(
        // privateとかはアクセス修飾子（可視性修飾子）と呼ばれる
        private file: File,
        private rank: Rank
    ) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

abstract class Piece {
    //1と同様にプロパティをthisに割り当てるが、1と違いサブクラスからもアクセスできる
    protected position: Position
    constructor(
        //new Pieceの時だけ書き込み可能で、その後は読み取りのみ可能になる
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        //ここで割り当てないとTypeScriptはエラーにする。
        //割り当てがないということは、undefinedもありうることを教えてくれる
        this.position = new Position(file, rank)
    }

    //サブクラスはここをオーバーライド（上書き）可能
    //デフォルトの中身だけ書いておいたりする
    moveTo(position: Position) {
        this.position = position
    }
    //抽象メソッド。抽象クラスを継承する際は必ず実装しなければいけない
    abstract canMoveTo(position: Position): boolean
}

class Game{
    private pieces = Game.makePieces()
    private static makePieces() {
        return [
            //キング
            new King('White', 'E', 1),
            new King('Black', 'E', 8)
        ]
    }
}

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Queen extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Bishop extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Knight extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Rook extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Pawn extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
