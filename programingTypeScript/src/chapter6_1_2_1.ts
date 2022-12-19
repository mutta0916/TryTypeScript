export default null

// サーバーから取得した既存ユーザー
type ExistingUser = {
    id: number
    name: string
}

// サーバーにまだ保存されていない新規のユーザー
type NewUser = {
    name: string
}

function deleteUser(user: {id?: number, name: string}) {
    delete user.id
}
