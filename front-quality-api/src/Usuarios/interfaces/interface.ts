export interface User{
    id:number,
    username:string,
    password:string
    email:string,
    admin:boolean
}

export interface UserAction {
    type: 'addUsuario';
    payload: User;
  }