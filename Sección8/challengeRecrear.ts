type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };
  
  // Ejemplo de uso
  type Original = {
    foo: number;
    bar: string;
  };
  
  type T0 = MyPartial<Original>;
  /* 
  type T0 = {
    foo?: number;
    bar?: string;
  };
  */ 

  type Transform<T, U> = {
    [P in keyof T]: U;
  };
  
  // Ejemplo de uso
  type Original = {
    foo: number;
    bar: string;
  };
  
  type T0 = Transform<Original, boolean>;
  /*
  type T0 = {
    foo: boolean;
    bar: boolean;
  };
  */
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  
  // Ejemplo de uso
  type Original = {
    foo: number;
    bar: string;
    baz: boolean;
  };
  
  type T0 = MyPick<Original, "foo" | "bar">;
  /*
  type T0 = {
    foo: number;
    bar: string;
  };
  */
  