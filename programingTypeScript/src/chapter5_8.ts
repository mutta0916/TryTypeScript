export default null

//任意の型の任意の数の引数
type ClassConstructor = new(...args: any[]) => {}

function withEZDebug<C extends ClassConstructor> (Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args)
        }
    }
}
