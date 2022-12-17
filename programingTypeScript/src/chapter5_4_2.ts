export default null

interface Animal {
    readonly name: string
    eat(food: string): void,
    sleep(hours: number): void
}

interface Feline {
    meow(): void
}

//複数のインターフェースを実装することができる
class Cat implements Animal, Feline {
    name = 'Whiskers'
    eat(food: string) {
        console.log('Ate some', food, 'Mmm!')
    }

    sleep(hours: number) {
        console.log('Slept for', hours, 'hours!')
    }

    meow() {
        console.log('Meow')
    }
}
