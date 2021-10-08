


// export class FilterValues<T>{
//   private _eq: T | undefined
//   private _gr: T | undefined
//   private _ls: T | undefined
//   private _gr_eq: T | undefined
//   private _ls_eq: T | undefined
//   private _contain: T | undefined

//   private _reset(){
//     this._eq = undefined
//     this._gr= undefined
//     this._ls= undefined
//     this._gr_eq= undefined
//     this._ls_eq= undefined
//     this._contain = undefined
//   }

//   public change(keys: {type: string, value: T }[]): void{
//     this._reset()
//     for (let i = 0; i < keys.length; i++) {
//       if(keys[i].type === 'eq') this._eq = keys[i].value
//       else if(keys[i].type === 'contain') this._eq = keys[i].value
//       else if(keys[i].type === 'ls') this._ls = keys[i].value
//       else if(keys[i].type === 'ls_eq') this._ls_eq = keys[i].value
//       else if(keys[i].type === 'gr') this._gr = keys[i].value
//       else if(keys[i].type === 'gr_eq') this._gr_eq = keys[i].value
//       else MyError.generateError('Invalid key type passed!')
//     }
//   }

//   public check(item: T){
//     let status = true

//     if(status && !this._eq){
//       if(item !== this._eq) status = false
//     }

//     if(status && !this._contain){
//       if(item.indexOf(this._contain) === -1) status = false
//     }

//     if(status && !this._ls){
//       if(item >= this._ls) status = false
//     }

//     if(status && !this._ls_eq){
//       if(item > this._ls_eq) status = false
//     }

//     if(status && !this._gr){
//       if(item <= this._gr) status = false
//     }

//     if(status && !this._gr_eq){
//       if(item < this._gr+  ) status = false
//     }
//   }
// }

// export class MyError{
//   public static generateError(errMessage: string){
//     window.alert(errMessage)
//     throw Error(errMessage)
//   }
// }



// export class FilterParameterTemplate<T>{

//   public readonly _key: string
//   private readonly search: {
//     eq: T | undefined
//     gr: T | undefined
//     ls: T | undefined
//     gr_eq: T | undefined
//     ls_eq: T | undefined
//     contains: T | undefined
//   } | undefined
//   public type:
//     private _search: T | undefined

//   constructor(key: string) {
//     this._key = key
//   }

//   public setParameter(key: string, searchValue?: T) {
//     if (key !== this._key) return false
//     this._search = searchValue
//   }



// }

// export class Filter {
//   parameters: FilterParameterTemplate[]
// }

// export class StateTemplateTemplate<T>{
//   collection: T[],
//   selectedItem: object
//   filter: Filter
// }

