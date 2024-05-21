# Challenge

## Problema 1: `MyPartial`

Crea un tipo genérico `MyPartial` que tome un tipo `T` y retorne un tipo que sea igual a `T` pero con todas sus propiedades opcionales.

Por ejemplo:

```ts
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
```

## Problema 2: `Transform`

Crea un tipo genérico `Transform` que tome un tipo `T` y un tipo `U` y retorne un tipo que sea igual a `T` pero con todas sus propiedades transformadas a `U`.

Por ejemplo:

```ts
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
```

## Problema 3: `MyPick`

Crear un tipo de utilidad `MyPick` que permita escoger propiedades específicas de un objeto y crear un nuevo tipo basado en esas propiedades.

Tips:

- Utiliza dos genéricos: `T` y `K`. `K` será las keys que se escogerán de `T`.
- Puedes usar `extends` para crear un tipo que extienda otro tipo.
- Utiliza un tipo mapeado para iterar sobre las propiedades del tipo de entrada y crear el nuevo tipo basándose en las propiedades especificadas en K.

Por ejemplo:

```ts
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
```
