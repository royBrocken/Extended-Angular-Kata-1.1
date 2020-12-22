
export class Model<T> {
  patch(model: T, values: Partial<T>) {
    //= Assign values to class properties that appear in values parameter
    Object.getOwnPropertyNames(model).filter(p =>
      Object.getOwnPropertyNames(values).includes(p)
    ).forEach(p => this[p] = values[p])
  }
}


