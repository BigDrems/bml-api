
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Species
 * 
 */
export type Species = $Result.DefaultSelection<Prisma.$SpeciesPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Sighting
 * 
 */
export type Sighting = $Result.DefaultSelection<Prisma.$SightingPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model SpeciesPost
 * 
 */
export type SpeciesPost = $Result.DefaultSelection<Prisma.$SpeciesPostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  EXPERT: 'EXPERT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PostStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  VERIFIED: 'VERIFIED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const SightingStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type SightingStatus = (typeof SightingStatus)[keyof typeof SightingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type SightingStatus = $Enums.SightingStatus

export const SightingStatus: typeof $Enums.SightingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.species`: Exposes CRUD operations for the **Species** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Species
    * const species = await prisma.species.findMany()
    * ```
    */
  get species(): Prisma.SpeciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sighting`: Exposes CRUD operations for the **Sighting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sightings
    * const sightings = await prisma.sighting.findMany()
    * ```
    */
  get sighting(): Prisma.SightingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.speciesPost`: Exposes CRUD operations for the **SpeciesPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeciesPosts
    * const speciesPosts = await prisma.speciesPost.findMany()
    * ```
    */
  get speciesPost(): Prisma.SpeciesPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Species: 'Species',
    Location: 'Location',
    Sighting: 'Sighting',
    Media: 'Media',
    SpeciesPost: 'SpeciesPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "species" | "location" | "sighting" | "media" | "speciesPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Species: {
        payload: Prisma.$SpeciesPayload<ExtArgs>
        fields: Prisma.SpeciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findFirst: {
            args: Prisma.SpeciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          findMany: {
            args: Prisma.SpeciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          create: {
            args: Prisma.SpeciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          createMany: {
            args: Prisma.SpeciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          delete: {
            args: Prisma.SpeciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          update: {
            args: Prisma.SpeciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          deleteMany: {
            args: Prisma.SpeciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpeciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>[]
          }
          upsert: {
            args: Prisma.SpeciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPayload>
          }
          aggregate: {
            args: Prisma.SpeciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecies>
          }
          groupBy: {
            args: Prisma.SpeciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeciesCountArgs<ExtArgs>
            result: $Utils.Optional<SpeciesCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Sighting: {
        payload: Prisma.$SightingPayload<ExtArgs>
        fields: Prisma.SightingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SightingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SightingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>
          }
          findFirst: {
            args: Prisma.SightingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SightingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>
          }
          findMany: {
            args: Prisma.SightingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>[]
          }
          create: {
            args: Prisma.SightingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>
          }
          createMany: {
            args: Prisma.SightingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SightingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>[]
          }
          delete: {
            args: Prisma.SightingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>
          }
          update: {
            args: Prisma.SightingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>
          }
          deleteMany: {
            args: Prisma.SightingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SightingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SightingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>[]
          }
          upsert: {
            args: Prisma.SightingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SightingPayload>
          }
          aggregate: {
            args: Prisma.SightingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSighting>
          }
          groupBy: {
            args: Prisma.SightingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SightingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SightingCountArgs<ExtArgs>
            result: $Utils.Optional<SightingCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      SpeciesPost: {
        payload: Prisma.$SpeciesPostPayload<ExtArgs>
        fields: Prisma.SpeciesPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeciesPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeciesPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>
          }
          findFirst: {
            args: Prisma.SpeciesPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeciesPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>
          }
          findMany: {
            args: Prisma.SpeciesPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>[]
          }
          create: {
            args: Prisma.SpeciesPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>
          }
          createMany: {
            args: Prisma.SpeciesPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeciesPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>[]
          }
          delete: {
            args: Prisma.SpeciesPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>
          }
          update: {
            args: Prisma.SpeciesPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>
          }
          deleteMany: {
            args: Prisma.SpeciesPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeciesPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpeciesPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>[]
          }
          upsert: {
            args: Prisma.SpeciesPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeciesPostPayload>
          }
          aggregate: {
            args: Prisma.SpeciesPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeciesPost>
          }
          groupBy: {
            args: Prisma.SpeciesPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeciesPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeciesPostCountArgs<ExtArgs>
            result: $Utils.Optional<SpeciesPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    species?: SpeciesOmit
    location?: LocationOmit
    sighting?: SightingOmit
    media?: MediaOmit
    speciesPost?: SpeciesPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    sightings: number
    verified: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    sightings?: boolean | UserCountOutputTypeCountSightingsArgs
    verified?: boolean | UserCountOutputTypeCountVerifiedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SightingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesPostWhereInput
  }


  /**
   * Count Type SpeciesCountOutputType
   */

  export type SpeciesCountOutputType = {
    sightings: number
  }

  export type SpeciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sightings?: boolean | SpeciesCountOutputTypeCountSightingsArgs
  }

  // Custom InputTypes
  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesCountOutputType
     */
    select?: SpeciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpeciesCountOutputType without action
   */
  export type SpeciesCountOutputTypeCountSightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SightingWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    sightings: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sightings?: boolean | LocationCountOutputTypeCountSightingsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountSightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SightingWhereInput
  }


  /**
   * Count Type SightingCountOutputType
   */

  export type SightingCountOutputType = {
    media: number
  }

  export type SightingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | SightingCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * SightingCountOutputType without action
   */
  export type SightingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SightingCountOutputType
     */
    select?: SightingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SightingCountOutputType without action
   */
  export type SightingCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uid: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uid: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    name: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uid?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: string
    name: string | null
    email: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    sightings?: boolean | User$sightingsArgs<ExtArgs>
    verified?: boolean | User$verifiedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "name" | "email" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    sightings?: boolean | User$sightingsArgs<ExtArgs>
    verified?: boolean | User$verifiedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$SpeciesPostPayload<ExtArgs>[]
      sightings: Prisma.$SightingPayload<ExtArgs>[]
      verified: Prisma.$SpeciesPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      name: string | null
      email: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sightings<T extends User$sightingsArgs<ExtArgs> = {}>(args?: Subset<T, User$sightingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verified<T extends User$verifiedArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly uid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    where?: SpeciesPostWhereInput
    orderBy?: SpeciesPostOrderByWithRelationInput | SpeciesPostOrderByWithRelationInput[]
    cursor?: SpeciesPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpeciesPostScalarFieldEnum | SpeciesPostScalarFieldEnum[]
  }

  /**
   * User.sightings
   */
  export type User$sightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    where?: SightingWhereInput
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    cursor?: SightingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SightingScalarFieldEnum | SightingScalarFieldEnum[]
  }

  /**
   * User.verified
   */
  export type User$verifiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    where?: SpeciesPostWhereInput
    orderBy?: SpeciesPostOrderByWithRelationInput | SpeciesPostOrderByWithRelationInput[]
    cursor?: SpeciesPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpeciesPostScalarFieldEnum | SpeciesPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Species
   */

  export type AggregateSpecies = {
    _count: SpeciesCountAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  export type SpeciesMinAggregateOutputType = {
    id: string | null
    scientificName: string | null
    commonName: string | null
    description: string | null
    imageUrl: string | null
    diet: string | null
    length: string | null
    weight: string | null
    lifespan: string | null
    conservationStatus: string | null
    habitat: string | null
    speciesType: string | null
    coloration: string | null
    bodyShape: string | null
    distinguishingMarks: string | null
    physicalFeatures: string | null
    tracks: string | null
    vocalizations: string | null
    elevationRange: string | null
    climate: string | null
    waterRequirements: string | null
    primaryRange: string | null
    seasonalPresence: string | null
    createdAt: Date | null
  }

  export type SpeciesMaxAggregateOutputType = {
    id: string | null
    scientificName: string | null
    commonName: string | null
    description: string | null
    imageUrl: string | null
    diet: string | null
    length: string | null
    weight: string | null
    lifespan: string | null
    conservationStatus: string | null
    habitat: string | null
    speciesType: string | null
    coloration: string | null
    bodyShape: string | null
    distinguishingMarks: string | null
    physicalFeatures: string | null
    tracks: string | null
    vocalizations: string | null
    elevationRange: string | null
    climate: string | null
    waterRequirements: string | null
    primaryRange: string | null
    seasonalPresence: string | null
    createdAt: Date | null
  }

  export type SpeciesCountAggregateOutputType = {
    id: number
    scientificName: number
    commonName: number
    description: number
    imageUrl: number
    diet: number
    length: number
    weight: number
    lifespan: number
    conservationStatus: number
    habitat: number
    speciesType: number
    coloration: number
    bodyShape: number
    distinguishingMarks: number
    physicalFeatures: number
    tracks: number
    vocalizations: number
    elevationRange: number
    climate: number
    waterRequirements: number
    primaryRange: number
    seasonalPresence: number
    createdAt: number
    _all: number
  }


  export type SpeciesMinAggregateInputType = {
    id?: true
    scientificName?: true
    commonName?: true
    description?: true
    imageUrl?: true
    diet?: true
    length?: true
    weight?: true
    lifespan?: true
    conservationStatus?: true
    habitat?: true
    speciesType?: true
    coloration?: true
    bodyShape?: true
    distinguishingMarks?: true
    physicalFeatures?: true
    tracks?: true
    vocalizations?: true
    elevationRange?: true
    climate?: true
    waterRequirements?: true
    primaryRange?: true
    seasonalPresence?: true
    createdAt?: true
  }

  export type SpeciesMaxAggregateInputType = {
    id?: true
    scientificName?: true
    commonName?: true
    description?: true
    imageUrl?: true
    diet?: true
    length?: true
    weight?: true
    lifespan?: true
    conservationStatus?: true
    habitat?: true
    speciesType?: true
    coloration?: true
    bodyShape?: true
    distinguishingMarks?: true
    physicalFeatures?: true
    tracks?: true
    vocalizations?: true
    elevationRange?: true
    climate?: true
    waterRequirements?: true
    primaryRange?: true
    seasonalPresence?: true
    createdAt?: true
  }

  export type SpeciesCountAggregateInputType = {
    id?: true
    scientificName?: true
    commonName?: true
    description?: true
    imageUrl?: true
    diet?: true
    length?: true
    weight?: true
    lifespan?: true
    conservationStatus?: true
    habitat?: true
    speciesType?: true
    coloration?: true
    bodyShape?: true
    distinguishingMarks?: true
    physicalFeatures?: true
    tracks?: true
    vocalizations?: true
    elevationRange?: true
    climate?: true
    waterRequirements?: true
    primaryRange?: true
    seasonalPresence?: true
    createdAt?: true
    _all?: true
  }

  export type SpeciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to aggregate.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Species
    **/
    _count?: true | SpeciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeciesMaxAggregateInputType
  }

  export type GetSpeciesAggregateType<T extends SpeciesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecies[P]>
      : GetScalarType<T[P], AggregateSpecies[P]>
  }




  export type SpeciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesWhereInput
    orderBy?: SpeciesOrderByWithAggregationInput | SpeciesOrderByWithAggregationInput[]
    by: SpeciesScalarFieldEnum[] | SpeciesScalarFieldEnum
    having?: SpeciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeciesCountAggregateInputType | true
    _min?: SpeciesMinAggregateInputType
    _max?: SpeciesMaxAggregateInputType
  }

  export type SpeciesGroupByOutputType = {
    id: string
    scientificName: string
    commonName: string | null
    description: string | null
    imageUrl: string | null
    diet: string | null
    length: string | null
    weight: string | null
    lifespan: string | null
    conservationStatus: string | null
    habitat: string | null
    speciesType: string | null
    coloration: string | null
    bodyShape: string | null
    distinguishingMarks: string | null
    physicalFeatures: string | null
    tracks: string | null
    vocalizations: string | null
    elevationRange: string | null
    climate: string | null
    waterRequirements: string | null
    primaryRange: string | null
    seasonalPresence: string | null
    createdAt: Date
    _count: SpeciesCountAggregateOutputType | null
    _min: SpeciesMinAggregateOutputType | null
    _max: SpeciesMaxAggregateOutputType | null
  }

  type GetSpeciesGroupByPayload<T extends SpeciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
            : GetScalarType<T[P], SpeciesGroupByOutputType[P]>
        }
      >
    >


  export type SpeciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scientificName?: boolean
    commonName?: boolean
    description?: boolean
    imageUrl?: boolean
    diet?: boolean
    length?: boolean
    weight?: boolean
    lifespan?: boolean
    conservationStatus?: boolean
    habitat?: boolean
    speciesType?: boolean
    coloration?: boolean
    bodyShape?: boolean
    distinguishingMarks?: boolean
    physicalFeatures?: boolean
    tracks?: boolean
    vocalizations?: boolean
    elevationRange?: boolean
    climate?: boolean
    waterRequirements?: boolean
    primaryRange?: boolean
    seasonalPresence?: boolean
    createdAt?: boolean
    sightings?: boolean | Species$sightingsArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scientificName?: boolean
    commonName?: boolean
    description?: boolean
    imageUrl?: boolean
    diet?: boolean
    length?: boolean
    weight?: boolean
    lifespan?: boolean
    conservationStatus?: boolean
    habitat?: boolean
    speciesType?: boolean
    coloration?: boolean
    bodyShape?: boolean
    distinguishingMarks?: boolean
    physicalFeatures?: boolean
    tracks?: boolean
    vocalizations?: boolean
    elevationRange?: boolean
    climate?: boolean
    waterRequirements?: boolean
    primaryRange?: boolean
    seasonalPresence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scientificName?: boolean
    commonName?: boolean
    description?: boolean
    imageUrl?: boolean
    diet?: boolean
    length?: boolean
    weight?: boolean
    lifespan?: boolean
    conservationStatus?: boolean
    habitat?: boolean
    speciesType?: boolean
    coloration?: boolean
    bodyShape?: boolean
    distinguishingMarks?: boolean
    physicalFeatures?: boolean
    tracks?: boolean
    vocalizations?: boolean
    elevationRange?: boolean
    climate?: boolean
    waterRequirements?: boolean
    primaryRange?: boolean
    seasonalPresence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["species"]>

  export type SpeciesSelectScalar = {
    id?: boolean
    scientificName?: boolean
    commonName?: boolean
    description?: boolean
    imageUrl?: boolean
    diet?: boolean
    length?: boolean
    weight?: boolean
    lifespan?: boolean
    conservationStatus?: boolean
    habitat?: boolean
    speciesType?: boolean
    coloration?: boolean
    bodyShape?: boolean
    distinguishingMarks?: boolean
    physicalFeatures?: boolean
    tracks?: boolean
    vocalizations?: boolean
    elevationRange?: boolean
    climate?: boolean
    waterRequirements?: boolean
    primaryRange?: boolean
    seasonalPresence?: boolean
    createdAt?: boolean
  }

  export type SpeciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scientificName" | "commonName" | "description" | "imageUrl" | "diet" | "length" | "weight" | "lifespan" | "conservationStatus" | "habitat" | "speciesType" | "coloration" | "bodyShape" | "distinguishingMarks" | "physicalFeatures" | "tracks" | "vocalizations" | "elevationRange" | "climate" | "waterRequirements" | "primaryRange" | "seasonalPresence" | "createdAt", ExtArgs["result"]["species"]>
  export type SpeciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sightings?: boolean | Species$sightingsArgs<ExtArgs>
    _count?: boolean | SpeciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpeciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpeciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpeciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Species"
    objects: {
      sightings: Prisma.$SightingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scientificName: string
      commonName: string | null
      description: string | null
      imageUrl: string | null
      diet: string | null
      length: string | null
      weight: string | null
      lifespan: string | null
      conservationStatus: string | null
      habitat: string | null
      speciesType: string | null
      coloration: string | null
      bodyShape: string | null
      distinguishingMarks: string | null
      physicalFeatures: string | null
      tracks: string | null
      vocalizations: string | null
      elevationRange: string | null
      climate: string | null
      waterRequirements: string | null
      primaryRange: string | null
      seasonalPresence: string | null
      createdAt: Date
    }, ExtArgs["result"]["species"]>
    composites: {}
  }

  type SpeciesGetPayload<S extends boolean | null | undefined | SpeciesDefaultArgs> = $Result.GetResult<Prisma.$SpeciesPayload, S>

  type SpeciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeciesCountAggregateInputType | true
    }

  export interface SpeciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Species'], meta: { name: 'Species' } }
    /**
     * Find zero or one Species that matches the filter.
     * @param {SpeciesFindUniqueArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeciesFindUniqueArgs>(args: SelectSubset<T, SpeciesFindUniqueArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Species that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeciesFindUniqueOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeciesFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeciesFindFirstArgs>(args?: SelectSubset<T, SpeciesFindFirstArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Species that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindFirstOrThrowArgs} args - Arguments to find a Species
     * @example
     * // Get one Species
     * const species = await prisma.species.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeciesFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Species that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Species
     * const species = await prisma.species.findMany()
     * 
     * // Get first 10 Species
     * const species = await prisma.species.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speciesWithIdOnly = await prisma.species.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeciesFindManyArgs>(args?: SelectSubset<T, SpeciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Species.
     * @param {SpeciesCreateArgs} args - Arguments to create a Species.
     * @example
     * // Create one Species
     * const Species = await prisma.species.create({
     *   data: {
     *     // ... data to create a Species
     *   }
     * })
     * 
     */
    create<T extends SpeciesCreateArgs>(args: SelectSubset<T, SpeciesCreateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Species.
     * @param {SpeciesCreateManyArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeciesCreateManyArgs>(args?: SelectSubset<T, SpeciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Species and returns the data saved in the database.
     * @param {SpeciesCreateManyAndReturnArgs} args - Arguments to create many Species.
     * @example
     * // Create many Species
     * const species = await prisma.species.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Species and only return the `id`
     * const speciesWithIdOnly = await prisma.species.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeciesCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Species.
     * @param {SpeciesDeleteArgs} args - Arguments to delete one Species.
     * @example
     * // Delete one Species
     * const Species = await prisma.species.delete({
     *   where: {
     *     // ... filter to delete one Species
     *   }
     * })
     * 
     */
    delete<T extends SpeciesDeleteArgs>(args: SelectSubset<T, SpeciesDeleteArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Species.
     * @param {SpeciesUpdateArgs} args - Arguments to update one Species.
     * @example
     * // Update one Species
     * const species = await prisma.species.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeciesUpdateArgs>(args: SelectSubset<T, SpeciesUpdateArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Species.
     * @param {SpeciesDeleteManyArgs} args - Arguments to filter Species to delete.
     * @example
     * // Delete a few Species
     * const { count } = await prisma.species.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeciesDeleteManyArgs>(args?: SelectSubset<T, SpeciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Species
     * const species = await prisma.species.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeciesUpdateManyArgs>(args: SelectSubset<T, SpeciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Species and returns the data updated in the database.
     * @param {SpeciesUpdateManyAndReturnArgs} args - Arguments to update many Species.
     * @example
     * // Update many Species
     * const species = await prisma.species.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Species and only return the `id`
     * const speciesWithIdOnly = await prisma.species.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpeciesUpdateManyAndReturnArgs>(args: SelectSubset<T, SpeciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Species.
     * @param {SpeciesUpsertArgs} args - Arguments to update or create a Species.
     * @example
     * // Update or create a Species
     * const species = await prisma.species.upsert({
     *   create: {
     *     // ... data to create a Species
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Species we want to update
     *   }
     * })
     */
    upsert<T extends SpeciesUpsertArgs>(args: SelectSubset<T, SpeciesUpsertArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesCountArgs} args - Arguments to filter Species to count.
     * @example
     * // Count the number of Species
     * const count = await prisma.species.count({
     *   where: {
     *     // ... the filter for the Species we want to count
     *   }
     * })
    **/
    count<T extends SpeciesCountArgs>(
      args?: Subset<T, SpeciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeciesAggregateArgs>(args: Subset<T, SpeciesAggregateArgs>): Prisma.PrismaPromise<GetSpeciesAggregateType<T>>

    /**
     * Group by Species.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeciesGroupByArgs['orderBy'] }
        : { orderBy?: SpeciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Species model
   */
  readonly fields: SpeciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Species.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sightings<T extends Species$sightingsArgs<ExtArgs> = {}>(args?: Subset<T, Species$sightingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Species model
   */
  interface SpeciesFieldRefs {
    readonly id: FieldRef<"Species", 'String'>
    readonly scientificName: FieldRef<"Species", 'String'>
    readonly commonName: FieldRef<"Species", 'String'>
    readonly description: FieldRef<"Species", 'String'>
    readonly imageUrl: FieldRef<"Species", 'String'>
    readonly diet: FieldRef<"Species", 'String'>
    readonly length: FieldRef<"Species", 'String'>
    readonly weight: FieldRef<"Species", 'String'>
    readonly lifespan: FieldRef<"Species", 'String'>
    readonly conservationStatus: FieldRef<"Species", 'String'>
    readonly habitat: FieldRef<"Species", 'String'>
    readonly speciesType: FieldRef<"Species", 'String'>
    readonly coloration: FieldRef<"Species", 'String'>
    readonly bodyShape: FieldRef<"Species", 'String'>
    readonly distinguishingMarks: FieldRef<"Species", 'String'>
    readonly physicalFeatures: FieldRef<"Species", 'String'>
    readonly tracks: FieldRef<"Species", 'String'>
    readonly vocalizations: FieldRef<"Species", 'String'>
    readonly elevationRange: FieldRef<"Species", 'String'>
    readonly climate: FieldRef<"Species", 'String'>
    readonly waterRequirements: FieldRef<"Species", 'String'>
    readonly primaryRange: FieldRef<"Species", 'String'>
    readonly seasonalPresence: FieldRef<"Species", 'String'>
    readonly createdAt: FieldRef<"Species", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Species findUnique
   */
  export type SpeciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findUniqueOrThrow
   */
  export type SpeciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species findFirst
   */
  export type SpeciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findFirstOrThrow
   */
  export type SpeciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Species.
     */
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species findMany
   */
  export type SpeciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter, which Species to fetch.
     */
    where?: SpeciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Species to fetch.
     */
    orderBy?: SpeciesOrderByWithRelationInput | SpeciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Species.
     */
    cursor?: SpeciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Species from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Species.
     */
    skip?: number
    distinct?: SpeciesScalarFieldEnum | SpeciesScalarFieldEnum[]
  }

  /**
   * Species create
   */
  export type SpeciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Species.
     */
    data: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
  }

  /**
   * Species createMany
   */
  export type SpeciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Species createManyAndReturn
   */
  export type SpeciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * The data used to create many Species.
     */
    data: SpeciesCreateManyInput | SpeciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Species update
   */
  export type SpeciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Species.
     */
    data: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
    /**
     * Choose, which Species to update.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species updateMany
   */
  export type SpeciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Species.
     */
    data: XOR<SpeciesUpdateManyMutationInput, SpeciesUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to update.
     */
    limit?: number
  }

  /**
   * Species updateManyAndReturn
   */
  export type SpeciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * The data used to update Species.
     */
    data: XOR<SpeciesUpdateManyMutationInput, SpeciesUncheckedUpdateManyInput>
    /**
     * Filter which Species to update
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to update.
     */
    limit?: number
  }

  /**
   * Species upsert
   */
  export type SpeciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Species to update in case it exists.
     */
    where: SpeciesWhereUniqueInput
    /**
     * In case the Species found by the `where` argument doesn't exist, create a new Species with this data.
     */
    create: XOR<SpeciesCreateInput, SpeciesUncheckedCreateInput>
    /**
     * In case the Species was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeciesUpdateInput, SpeciesUncheckedUpdateInput>
  }

  /**
   * Species delete
   */
  export type SpeciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    /**
     * Filter which Species to delete.
     */
    where: SpeciesWhereUniqueInput
  }

  /**
   * Species deleteMany
   */
  export type SpeciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Species to delete
     */
    where?: SpeciesWhereInput
    /**
     * Limit how many Species to delete.
     */
    limit?: number
  }

  /**
   * Species.sightings
   */
  export type Species$sightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    where?: SightingWhereInput
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    cursor?: SightingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SightingScalarFieldEnum | SightingScalarFieldEnum[]
  }

  /**
   * Species without action
   */
  export type SpeciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type LocationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    region: string | null
    municipality: string | null
    province: string | null
    country: string | null
    habitatType: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    region: string | null
    municipality: string | null
    province: string | null
    country: string | null
    habitatType: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    region: number
    municipality: number
    province: number
    country: number
    habitatType: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    region?: true
    municipality?: true
    province?: true
    country?: true
    habitatType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    region?: true
    municipality?: true
    province?: true
    country?: true
    habitatType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    region?: true
    municipality?: true
    province?: true
    country?: true
    habitatType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    region: string | null
    municipality: string | null
    province: string | null
    country: string | null
    habitatType: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    municipality?: boolean
    province?: boolean
    country?: boolean
    habitatType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    sightings?: boolean | Location$sightingsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    municipality?: boolean
    province?: boolean
    country?: boolean
    habitatType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    municipality?: boolean
    province?: boolean
    country?: boolean
    habitatType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    region?: boolean
    municipality?: boolean
    province?: boolean
    country?: boolean
    habitatType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "region" | "municipality" | "province" | "country" | "habitatType" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sightings?: boolean | Location$sightingsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      sightings: Prisma.$SightingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      region: string | null
      municipality: string | null
      province: string | null
      country: string | null
      habitatType: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sightings<T extends Location$sightingsArgs<ExtArgs> = {}>(args?: Subset<T, Location$sightingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly description: FieldRef<"Location", 'String'>
    readonly region: FieldRef<"Location", 'String'>
    readonly municipality: FieldRef<"Location", 'String'>
    readonly province: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly habitatType: FieldRef<"Location", 'String'>
    readonly latitude: FieldRef<"Location", 'Float'>
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.sightings
   */
  export type Location$sightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    where?: SightingWhereInput
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    cursor?: SightingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SightingScalarFieldEnum | SightingScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Sighting
   */

  export type AggregateSighting = {
    _count: SightingCountAggregateOutputType | null
    _min: SightingMinAggregateOutputType | null
    _max: SightingMaxAggregateOutputType | null
  }

  export type SightingMinAggregateOutputType = {
    id: string | null
    userUid: string | null
    speciesId: string | null
    locationId: string | null
    locationName: string | null
    notes: string | null
    status: $Enums.SightingStatus | null
    observedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SightingMaxAggregateOutputType = {
    id: string | null
    userUid: string | null
    speciesId: string | null
    locationId: string | null
    locationName: string | null
    notes: string | null
    status: $Enums.SightingStatus | null
    observedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SightingCountAggregateOutputType = {
    id: number
    userUid: number
    speciesId: number
    locationId: number
    locationName: number
    notes: number
    status: number
    observedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SightingMinAggregateInputType = {
    id?: true
    userUid?: true
    speciesId?: true
    locationId?: true
    locationName?: true
    notes?: true
    status?: true
    observedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SightingMaxAggregateInputType = {
    id?: true
    userUid?: true
    speciesId?: true
    locationId?: true
    locationName?: true
    notes?: true
    status?: true
    observedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SightingCountAggregateInputType = {
    id?: true
    userUid?: true
    speciesId?: true
    locationId?: true
    locationName?: true
    notes?: true
    status?: true
    observedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SightingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sighting to aggregate.
     */
    where?: SightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sightings to fetch.
     */
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sightings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sightings
    **/
    _count?: true | SightingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SightingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SightingMaxAggregateInputType
  }

  export type GetSightingAggregateType<T extends SightingAggregateArgs> = {
        [P in keyof T & keyof AggregateSighting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSighting[P]>
      : GetScalarType<T[P], AggregateSighting[P]>
  }




  export type SightingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SightingWhereInput
    orderBy?: SightingOrderByWithAggregationInput | SightingOrderByWithAggregationInput[]
    by: SightingScalarFieldEnum[] | SightingScalarFieldEnum
    having?: SightingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SightingCountAggregateInputType | true
    _min?: SightingMinAggregateInputType
    _max?: SightingMaxAggregateInputType
  }

  export type SightingGroupByOutputType = {
    id: string
    userUid: string
    speciesId: string | null
    locationId: string | null
    locationName: string | null
    notes: string | null
    status: $Enums.SightingStatus
    observedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SightingCountAggregateOutputType | null
    _min: SightingMinAggregateOutputType | null
    _max: SightingMaxAggregateOutputType | null
  }

  type GetSightingGroupByPayload<T extends SightingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SightingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SightingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SightingGroupByOutputType[P]>
            : GetScalarType<T[P], SightingGroupByOutputType[P]>
        }
      >
    >


  export type SightingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userUid?: boolean
    speciesId?: boolean
    locationId?: boolean
    locationName?: boolean
    notes?: boolean
    status?: boolean
    observedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    species?: boolean | Sighting$speciesArgs<ExtArgs>
    location?: boolean | Sighting$locationArgs<ExtArgs>
    media?: boolean | Sighting$mediaArgs<ExtArgs>
    _count?: boolean | SightingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sighting"]>

  export type SightingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userUid?: boolean
    speciesId?: boolean
    locationId?: boolean
    locationName?: boolean
    notes?: boolean
    status?: boolean
    observedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    species?: boolean | Sighting$speciesArgs<ExtArgs>
    location?: boolean | Sighting$locationArgs<ExtArgs>
  }, ExtArgs["result"]["sighting"]>

  export type SightingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userUid?: boolean
    speciesId?: boolean
    locationId?: boolean
    locationName?: boolean
    notes?: boolean
    status?: boolean
    observedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    species?: boolean | Sighting$speciesArgs<ExtArgs>
    location?: boolean | Sighting$locationArgs<ExtArgs>
  }, ExtArgs["result"]["sighting"]>

  export type SightingSelectScalar = {
    id?: boolean
    userUid?: boolean
    speciesId?: boolean
    locationId?: boolean
    locationName?: boolean
    notes?: boolean
    status?: boolean
    observedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SightingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userUid" | "speciesId" | "locationId" | "locationName" | "notes" | "status" | "observedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["sighting"]>
  export type SightingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    species?: boolean | Sighting$speciesArgs<ExtArgs>
    location?: boolean | Sighting$locationArgs<ExtArgs>
    media?: boolean | Sighting$mediaArgs<ExtArgs>
    _count?: boolean | SightingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SightingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    species?: boolean | Sighting$speciesArgs<ExtArgs>
    location?: boolean | Sighting$locationArgs<ExtArgs>
  }
  export type SightingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    species?: boolean | Sighting$speciesArgs<ExtArgs>
    location?: boolean | Sighting$locationArgs<ExtArgs>
  }

  export type $SightingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sighting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      species: Prisma.$SpeciesPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
      media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userUid: string
      speciesId: string | null
      locationId: string | null
      locationName: string | null
      notes: string | null
      status: $Enums.SightingStatus
      observedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sighting"]>
    composites: {}
  }

  type SightingGetPayload<S extends boolean | null | undefined | SightingDefaultArgs> = $Result.GetResult<Prisma.$SightingPayload, S>

  type SightingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SightingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SightingCountAggregateInputType | true
    }

  export interface SightingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sighting'], meta: { name: 'Sighting' } }
    /**
     * Find zero or one Sighting that matches the filter.
     * @param {SightingFindUniqueArgs} args - Arguments to find a Sighting
     * @example
     * // Get one Sighting
     * const sighting = await prisma.sighting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SightingFindUniqueArgs>(args: SelectSubset<T, SightingFindUniqueArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sighting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SightingFindUniqueOrThrowArgs} args - Arguments to find a Sighting
     * @example
     * // Get one Sighting
     * const sighting = await prisma.sighting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SightingFindUniqueOrThrowArgs>(args: SelectSubset<T, SightingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sighting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingFindFirstArgs} args - Arguments to find a Sighting
     * @example
     * // Get one Sighting
     * const sighting = await prisma.sighting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SightingFindFirstArgs>(args?: SelectSubset<T, SightingFindFirstArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sighting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingFindFirstOrThrowArgs} args - Arguments to find a Sighting
     * @example
     * // Get one Sighting
     * const sighting = await prisma.sighting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SightingFindFirstOrThrowArgs>(args?: SelectSubset<T, SightingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sightings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sightings
     * const sightings = await prisma.sighting.findMany()
     * 
     * // Get first 10 Sightings
     * const sightings = await prisma.sighting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sightingWithIdOnly = await prisma.sighting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SightingFindManyArgs>(args?: SelectSubset<T, SightingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sighting.
     * @param {SightingCreateArgs} args - Arguments to create a Sighting.
     * @example
     * // Create one Sighting
     * const Sighting = await prisma.sighting.create({
     *   data: {
     *     // ... data to create a Sighting
     *   }
     * })
     * 
     */
    create<T extends SightingCreateArgs>(args: SelectSubset<T, SightingCreateArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sightings.
     * @param {SightingCreateManyArgs} args - Arguments to create many Sightings.
     * @example
     * // Create many Sightings
     * const sighting = await prisma.sighting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SightingCreateManyArgs>(args?: SelectSubset<T, SightingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sightings and returns the data saved in the database.
     * @param {SightingCreateManyAndReturnArgs} args - Arguments to create many Sightings.
     * @example
     * // Create many Sightings
     * const sighting = await prisma.sighting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sightings and only return the `id`
     * const sightingWithIdOnly = await prisma.sighting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SightingCreateManyAndReturnArgs>(args?: SelectSubset<T, SightingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sighting.
     * @param {SightingDeleteArgs} args - Arguments to delete one Sighting.
     * @example
     * // Delete one Sighting
     * const Sighting = await prisma.sighting.delete({
     *   where: {
     *     // ... filter to delete one Sighting
     *   }
     * })
     * 
     */
    delete<T extends SightingDeleteArgs>(args: SelectSubset<T, SightingDeleteArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sighting.
     * @param {SightingUpdateArgs} args - Arguments to update one Sighting.
     * @example
     * // Update one Sighting
     * const sighting = await prisma.sighting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SightingUpdateArgs>(args: SelectSubset<T, SightingUpdateArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sightings.
     * @param {SightingDeleteManyArgs} args - Arguments to filter Sightings to delete.
     * @example
     * // Delete a few Sightings
     * const { count } = await prisma.sighting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SightingDeleteManyArgs>(args?: SelectSubset<T, SightingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sightings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sightings
     * const sighting = await prisma.sighting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SightingUpdateManyArgs>(args: SelectSubset<T, SightingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sightings and returns the data updated in the database.
     * @param {SightingUpdateManyAndReturnArgs} args - Arguments to update many Sightings.
     * @example
     * // Update many Sightings
     * const sighting = await prisma.sighting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sightings and only return the `id`
     * const sightingWithIdOnly = await prisma.sighting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SightingUpdateManyAndReturnArgs>(args: SelectSubset<T, SightingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sighting.
     * @param {SightingUpsertArgs} args - Arguments to update or create a Sighting.
     * @example
     * // Update or create a Sighting
     * const sighting = await prisma.sighting.upsert({
     *   create: {
     *     // ... data to create a Sighting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sighting we want to update
     *   }
     * })
     */
    upsert<T extends SightingUpsertArgs>(args: SelectSubset<T, SightingUpsertArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sightings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingCountArgs} args - Arguments to filter Sightings to count.
     * @example
     * // Count the number of Sightings
     * const count = await prisma.sighting.count({
     *   where: {
     *     // ... the filter for the Sightings we want to count
     *   }
     * })
    **/
    count<T extends SightingCountArgs>(
      args?: Subset<T, SightingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SightingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sighting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SightingAggregateArgs>(args: Subset<T, SightingAggregateArgs>): Prisma.PrismaPromise<GetSightingAggregateType<T>>

    /**
     * Group by Sighting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SightingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SightingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SightingGroupByArgs['orderBy'] }
        : { orderBy?: SightingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SightingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSightingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sighting model
   */
  readonly fields: SightingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sighting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SightingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    species<T extends Sighting$speciesArgs<ExtArgs> = {}>(args?: Subset<T, Sighting$speciesArgs<ExtArgs>>): Prisma__SpeciesClient<$Result.GetResult<Prisma.$SpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends Sighting$locationArgs<ExtArgs> = {}>(args?: Subset<T, Sighting$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    media<T extends Sighting$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Sighting$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sighting model
   */
  interface SightingFieldRefs {
    readonly id: FieldRef<"Sighting", 'String'>
    readonly userUid: FieldRef<"Sighting", 'String'>
    readonly speciesId: FieldRef<"Sighting", 'String'>
    readonly locationId: FieldRef<"Sighting", 'String'>
    readonly locationName: FieldRef<"Sighting", 'String'>
    readonly notes: FieldRef<"Sighting", 'String'>
    readonly status: FieldRef<"Sighting", 'SightingStatus'>
    readonly observedAt: FieldRef<"Sighting", 'DateTime'>
    readonly createdAt: FieldRef<"Sighting", 'DateTime'>
    readonly updatedAt: FieldRef<"Sighting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sighting findUnique
   */
  export type SightingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * Filter, which Sighting to fetch.
     */
    where: SightingWhereUniqueInput
  }

  /**
   * Sighting findUniqueOrThrow
   */
  export type SightingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * Filter, which Sighting to fetch.
     */
    where: SightingWhereUniqueInput
  }

  /**
   * Sighting findFirst
   */
  export type SightingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * Filter, which Sighting to fetch.
     */
    where?: SightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sightings to fetch.
     */
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sightings.
     */
    cursor?: SightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sightings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sightings.
     */
    distinct?: SightingScalarFieldEnum | SightingScalarFieldEnum[]
  }

  /**
   * Sighting findFirstOrThrow
   */
  export type SightingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * Filter, which Sighting to fetch.
     */
    where?: SightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sightings to fetch.
     */
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sightings.
     */
    cursor?: SightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sightings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sightings.
     */
    distinct?: SightingScalarFieldEnum | SightingScalarFieldEnum[]
  }

  /**
   * Sighting findMany
   */
  export type SightingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * Filter, which Sightings to fetch.
     */
    where?: SightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sightings to fetch.
     */
    orderBy?: SightingOrderByWithRelationInput | SightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sightings.
     */
    cursor?: SightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sightings.
     */
    skip?: number
    distinct?: SightingScalarFieldEnum | SightingScalarFieldEnum[]
  }

  /**
   * Sighting create
   */
  export type SightingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * The data needed to create a Sighting.
     */
    data: XOR<SightingCreateInput, SightingUncheckedCreateInput>
  }

  /**
   * Sighting createMany
   */
  export type SightingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sightings.
     */
    data: SightingCreateManyInput | SightingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sighting createManyAndReturn
   */
  export type SightingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * The data used to create many Sightings.
     */
    data: SightingCreateManyInput | SightingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sighting update
   */
  export type SightingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * The data needed to update a Sighting.
     */
    data: XOR<SightingUpdateInput, SightingUncheckedUpdateInput>
    /**
     * Choose, which Sighting to update.
     */
    where: SightingWhereUniqueInput
  }

  /**
   * Sighting updateMany
   */
  export type SightingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sightings.
     */
    data: XOR<SightingUpdateManyMutationInput, SightingUncheckedUpdateManyInput>
    /**
     * Filter which Sightings to update
     */
    where?: SightingWhereInput
    /**
     * Limit how many Sightings to update.
     */
    limit?: number
  }

  /**
   * Sighting updateManyAndReturn
   */
  export type SightingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * The data used to update Sightings.
     */
    data: XOR<SightingUpdateManyMutationInput, SightingUncheckedUpdateManyInput>
    /**
     * Filter which Sightings to update
     */
    where?: SightingWhereInput
    /**
     * Limit how many Sightings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sighting upsert
   */
  export type SightingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * The filter to search for the Sighting to update in case it exists.
     */
    where: SightingWhereUniqueInput
    /**
     * In case the Sighting found by the `where` argument doesn't exist, create a new Sighting with this data.
     */
    create: XOR<SightingCreateInput, SightingUncheckedCreateInput>
    /**
     * In case the Sighting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SightingUpdateInput, SightingUncheckedUpdateInput>
  }

  /**
   * Sighting delete
   */
  export type SightingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
    /**
     * Filter which Sighting to delete.
     */
    where: SightingWhereUniqueInput
  }

  /**
   * Sighting deleteMany
   */
  export type SightingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sightings to delete
     */
    where?: SightingWhereInput
    /**
     * Limit how many Sightings to delete.
     */
    limit?: number
  }

  /**
   * Sighting.species
   */
  export type Sighting$speciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Species
     */
    select?: SpeciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Species
     */
    omit?: SpeciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesInclude<ExtArgs> | null
    where?: SpeciesWhereInput
  }

  /**
   * Sighting.location
   */
  export type Sighting$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Sighting.media
   */
  export type Sighting$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Sighting without action
   */
  export type SightingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sighting
     */
    select?: SightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sighting
     */
    omit?: SightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SightingInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    sightingId: string | null
    url: string | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    sightingId: string | null
    url: string | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    sightingId: number
    url: number
    mimeType: number
    createdAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    sightingId?: true
    url?: true
    mimeType?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    sightingId?: true
    url?: true
    mimeType?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    sightingId?: true
    url?: true
    mimeType?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    sightingId: string
    url: string
    mimeType: string
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sightingId?: boolean
    url?: boolean
    mimeType?: boolean
    createdAt?: boolean
    sighting?: boolean | SightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sightingId?: boolean
    url?: boolean
    mimeType?: boolean
    createdAt?: boolean
    sighting?: boolean | SightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sightingId?: boolean
    url?: boolean
    mimeType?: boolean
    createdAt?: boolean
    sighting?: boolean | SightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    sightingId?: boolean
    url?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sightingId" | "url" | "mimeType" | "createdAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sighting?: boolean | SightingDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sighting?: boolean | SightingDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sighting?: boolean | SightingDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      sighting: Prisma.$SightingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sightingId: string
      url: string
      mimeType: string
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sighting<T extends SightingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SightingDefaultArgs<ExtArgs>>): Prisma__SightingClient<$Result.GetResult<Prisma.$SightingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly sightingId: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly mimeType: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model SpeciesPost
   */

  export type AggregateSpeciesPost = {
    _count: SpeciesPostCountAggregateOutputType | null
    _min: SpeciesPostMinAggregateOutputType | null
    _max: SpeciesPostMaxAggregateOutputType | null
  }

  export type SpeciesPostMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    aiPrediction: string | null
    userNotes: string | null
    status: $Enums.PostStatus | null
    userUid: string | null
    verifiedByUid: string | null
    createdAt: Date | null
  }

  export type SpeciesPostMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    aiPrediction: string | null
    userNotes: string | null
    status: $Enums.PostStatus | null
    userUid: string | null
    verifiedByUid: string | null
    createdAt: Date | null
  }

  export type SpeciesPostCountAggregateOutputType = {
    id: number
    imageUrl: number
    aiPrediction: number
    userNotes: number
    status: number
    userUid: number
    verifiedByUid: number
    createdAt: number
    _all: number
  }


  export type SpeciesPostMinAggregateInputType = {
    id?: true
    imageUrl?: true
    aiPrediction?: true
    userNotes?: true
    status?: true
    userUid?: true
    verifiedByUid?: true
    createdAt?: true
  }

  export type SpeciesPostMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    aiPrediction?: true
    userNotes?: true
    status?: true
    userUid?: true
    verifiedByUid?: true
    createdAt?: true
  }

  export type SpeciesPostCountAggregateInputType = {
    id?: true
    imageUrl?: true
    aiPrediction?: true
    userNotes?: true
    status?: true
    userUid?: true
    verifiedByUid?: true
    createdAt?: true
    _all?: true
  }

  export type SpeciesPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeciesPost to aggregate.
     */
    where?: SpeciesPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeciesPosts to fetch.
     */
    orderBy?: SpeciesPostOrderByWithRelationInput | SpeciesPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeciesPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeciesPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeciesPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeciesPosts
    **/
    _count?: true | SpeciesPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeciesPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeciesPostMaxAggregateInputType
  }

  export type GetSpeciesPostAggregateType<T extends SpeciesPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeciesPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeciesPost[P]>
      : GetScalarType<T[P], AggregateSpeciesPost[P]>
  }




  export type SpeciesPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeciesPostWhereInput
    orderBy?: SpeciesPostOrderByWithAggregationInput | SpeciesPostOrderByWithAggregationInput[]
    by: SpeciesPostScalarFieldEnum[] | SpeciesPostScalarFieldEnum
    having?: SpeciesPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeciesPostCountAggregateInputType | true
    _min?: SpeciesPostMinAggregateInputType
    _max?: SpeciesPostMaxAggregateInputType
  }

  export type SpeciesPostGroupByOutputType = {
    id: string
    imageUrl: string
    aiPrediction: string | null
    userNotes: string | null
    status: $Enums.PostStatus
    userUid: string
    verifiedByUid: string | null
    createdAt: Date
    _count: SpeciesPostCountAggregateOutputType | null
    _min: SpeciesPostMinAggregateOutputType | null
    _max: SpeciesPostMaxAggregateOutputType | null
  }

  type GetSpeciesPostGroupByPayload<T extends SpeciesPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeciesPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeciesPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeciesPostGroupByOutputType[P]>
            : GetScalarType<T[P], SpeciesPostGroupByOutputType[P]>
        }
      >
    >


  export type SpeciesPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    aiPrediction?: boolean
    userNotes?: boolean
    status?: boolean
    userUid?: boolean
    verifiedByUid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | SpeciesPost$verifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["speciesPost"]>

  export type SpeciesPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    aiPrediction?: boolean
    userNotes?: boolean
    status?: boolean
    userUid?: boolean
    verifiedByUid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | SpeciesPost$verifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["speciesPost"]>

  export type SpeciesPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    aiPrediction?: boolean
    userNotes?: boolean
    status?: boolean
    userUid?: boolean
    verifiedByUid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | SpeciesPost$verifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["speciesPost"]>

  export type SpeciesPostSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    aiPrediction?: boolean
    userNotes?: boolean
    status?: boolean
    userUid?: boolean
    verifiedByUid?: boolean
    createdAt?: boolean
  }

  export type SpeciesPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "aiPrediction" | "userNotes" | "status" | "userUid" | "verifiedByUid" | "createdAt", ExtArgs["result"]["speciesPost"]>
  export type SpeciesPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | SpeciesPost$verifiedByArgs<ExtArgs>
  }
  export type SpeciesPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | SpeciesPost$verifiedByArgs<ExtArgs>
  }
  export type SpeciesPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | SpeciesPost$verifiedByArgs<ExtArgs>
  }

  export type $SpeciesPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeciesPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      verifiedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      aiPrediction: string | null
      userNotes: string | null
      status: $Enums.PostStatus
      userUid: string
      verifiedByUid: string | null
      createdAt: Date
    }, ExtArgs["result"]["speciesPost"]>
    composites: {}
  }

  type SpeciesPostGetPayload<S extends boolean | null | undefined | SpeciesPostDefaultArgs> = $Result.GetResult<Prisma.$SpeciesPostPayload, S>

  type SpeciesPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeciesPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeciesPostCountAggregateInputType | true
    }

  export interface SpeciesPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeciesPost'], meta: { name: 'SpeciesPost' } }
    /**
     * Find zero or one SpeciesPost that matches the filter.
     * @param {SpeciesPostFindUniqueArgs} args - Arguments to find a SpeciesPost
     * @example
     * // Get one SpeciesPost
     * const speciesPost = await prisma.speciesPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeciesPostFindUniqueArgs>(args: SelectSubset<T, SpeciesPostFindUniqueArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpeciesPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeciesPostFindUniqueOrThrowArgs} args - Arguments to find a SpeciesPost
     * @example
     * // Get one SpeciesPost
     * const speciesPost = await prisma.speciesPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeciesPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeciesPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeciesPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostFindFirstArgs} args - Arguments to find a SpeciesPost
     * @example
     * // Get one SpeciesPost
     * const speciesPost = await prisma.speciesPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeciesPostFindFirstArgs>(args?: SelectSubset<T, SpeciesPostFindFirstArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeciesPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostFindFirstOrThrowArgs} args - Arguments to find a SpeciesPost
     * @example
     * // Get one SpeciesPost
     * const speciesPost = await prisma.speciesPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeciesPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeciesPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpeciesPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeciesPosts
     * const speciesPosts = await prisma.speciesPost.findMany()
     * 
     * // Get first 10 SpeciesPosts
     * const speciesPosts = await prisma.speciesPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speciesPostWithIdOnly = await prisma.speciesPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeciesPostFindManyArgs>(args?: SelectSubset<T, SpeciesPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpeciesPost.
     * @param {SpeciesPostCreateArgs} args - Arguments to create a SpeciesPost.
     * @example
     * // Create one SpeciesPost
     * const SpeciesPost = await prisma.speciesPost.create({
     *   data: {
     *     // ... data to create a SpeciesPost
     *   }
     * })
     * 
     */
    create<T extends SpeciesPostCreateArgs>(args: SelectSubset<T, SpeciesPostCreateArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpeciesPosts.
     * @param {SpeciesPostCreateManyArgs} args - Arguments to create many SpeciesPosts.
     * @example
     * // Create many SpeciesPosts
     * const speciesPost = await prisma.speciesPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeciesPostCreateManyArgs>(args?: SelectSubset<T, SpeciesPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpeciesPosts and returns the data saved in the database.
     * @param {SpeciesPostCreateManyAndReturnArgs} args - Arguments to create many SpeciesPosts.
     * @example
     * // Create many SpeciesPosts
     * const speciesPost = await prisma.speciesPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpeciesPosts and only return the `id`
     * const speciesPostWithIdOnly = await prisma.speciesPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeciesPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeciesPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpeciesPost.
     * @param {SpeciesPostDeleteArgs} args - Arguments to delete one SpeciesPost.
     * @example
     * // Delete one SpeciesPost
     * const SpeciesPost = await prisma.speciesPost.delete({
     *   where: {
     *     // ... filter to delete one SpeciesPost
     *   }
     * })
     * 
     */
    delete<T extends SpeciesPostDeleteArgs>(args: SelectSubset<T, SpeciesPostDeleteArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpeciesPost.
     * @param {SpeciesPostUpdateArgs} args - Arguments to update one SpeciesPost.
     * @example
     * // Update one SpeciesPost
     * const speciesPost = await prisma.speciesPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeciesPostUpdateArgs>(args: SelectSubset<T, SpeciesPostUpdateArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpeciesPosts.
     * @param {SpeciesPostDeleteManyArgs} args - Arguments to filter SpeciesPosts to delete.
     * @example
     * // Delete a few SpeciesPosts
     * const { count } = await prisma.speciesPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeciesPostDeleteManyArgs>(args?: SelectSubset<T, SpeciesPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeciesPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeciesPosts
     * const speciesPost = await prisma.speciesPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeciesPostUpdateManyArgs>(args: SelectSubset<T, SpeciesPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeciesPosts and returns the data updated in the database.
     * @param {SpeciesPostUpdateManyAndReturnArgs} args - Arguments to update many SpeciesPosts.
     * @example
     * // Update many SpeciesPosts
     * const speciesPost = await prisma.speciesPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpeciesPosts and only return the `id`
     * const speciesPostWithIdOnly = await prisma.speciesPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpeciesPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SpeciesPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpeciesPost.
     * @param {SpeciesPostUpsertArgs} args - Arguments to update or create a SpeciesPost.
     * @example
     * // Update or create a SpeciesPost
     * const speciesPost = await prisma.speciesPost.upsert({
     *   create: {
     *     // ... data to create a SpeciesPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeciesPost we want to update
     *   }
     * })
     */
    upsert<T extends SpeciesPostUpsertArgs>(args: SelectSubset<T, SpeciesPostUpsertArgs<ExtArgs>>): Prisma__SpeciesPostClient<$Result.GetResult<Prisma.$SpeciesPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpeciesPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostCountArgs} args - Arguments to filter SpeciesPosts to count.
     * @example
     * // Count the number of SpeciesPosts
     * const count = await prisma.speciesPost.count({
     *   where: {
     *     // ... the filter for the SpeciesPosts we want to count
     *   }
     * })
    **/
    count<T extends SpeciesPostCountArgs>(
      args?: Subset<T, SpeciesPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeciesPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeciesPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeciesPostAggregateArgs>(args: Subset<T, SpeciesPostAggregateArgs>): Prisma.PrismaPromise<GetSpeciesPostAggregateType<T>>

    /**
     * Group by SpeciesPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeciesPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeciesPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeciesPostGroupByArgs['orderBy'] }
        : { orderBy?: SpeciesPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeciesPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeciesPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeciesPost model
   */
  readonly fields: SpeciesPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeciesPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeciesPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifiedBy<T extends SpeciesPost$verifiedByArgs<ExtArgs> = {}>(args?: Subset<T, SpeciesPost$verifiedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpeciesPost model
   */
  interface SpeciesPostFieldRefs {
    readonly id: FieldRef<"SpeciesPost", 'String'>
    readonly imageUrl: FieldRef<"SpeciesPost", 'String'>
    readonly aiPrediction: FieldRef<"SpeciesPost", 'String'>
    readonly userNotes: FieldRef<"SpeciesPost", 'String'>
    readonly status: FieldRef<"SpeciesPost", 'PostStatus'>
    readonly userUid: FieldRef<"SpeciesPost", 'String'>
    readonly verifiedByUid: FieldRef<"SpeciesPost", 'String'>
    readonly createdAt: FieldRef<"SpeciesPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeciesPost findUnique
   */
  export type SpeciesPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * Filter, which SpeciesPost to fetch.
     */
    where: SpeciesPostWhereUniqueInput
  }

  /**
   * SpeciesPost findUniqueOrThrow
   */
  export type SpeciesPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * Filter, which SpeciesPost to fetch.
     */
    where: SpeciesPostWhereUniqueInput
  }

  /**
   * SpeciesPost findFirst
   */
  export type SpeciesPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * Filter, which SpeciesPost to fetch.
     */
    where?: SpeciesPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeciesPosts to fetch.
     */
    orderBy?: SpeciesPostOrderByWithRelationInput | SpeciesPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeciesPosts.
     */
    cursor?: SpeciesPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeciesPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeciesPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeciesPosts.
     */
    distinct?: SpeciesPostScalarFieldEnum | SpeciesPostScalarFieldEnum[]
  }

  /**
   * SpeciesPost findFirstOrThrow
   */
  export type SpeciesPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * Filter, which SpeciesPost to fetch.
     */
    where?: SpeciesPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeciesPosts to fetch.
     */
    orderBy?: SpeciesPostOrderByWithRelationInput | SpeciesPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeciesPosts.
     */
    cursor?: SpeciesPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeciesPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeciesPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeciesPosts.
     */
    distinct?: SpeciesPostScalarFieldEnum | SpeciesPostScalarFieldEnum[]
  }

  /**
   * SpeciesPost findMany
   */
  export type SpeciesPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * Filter, which SpeciesPosts to fetch.
     */
    where?: SpeciesPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeciesPosts to fetch.
     */
    orderBy?: SpeciesPostOrderByWithRelationInput | SpeciesPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeciesPosts.
     */
    cursor?: SpeciesPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeciesPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeciesPosts.
     */
    skip?: number
    distinct?: SpeciesPostScalarFieldEnum | SpeciesPostScalarFieldEnum[]
  }

  /**
   * SpeciesPost create
   */
  export type SpeciesPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SpeciesPost.
     */
    data: XOR<SpeciesPostCreateInput, SpeciesPostUncheckedCreateInput>
  }

  /**
   * SpeciesPost createMany
   */
  export type SpeciesPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeciesPosts.
     */
    data: SpeciesPostCreateManyInput | SpeciesPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeciesPost createManyAndReturn
   */
  export type SpeciesPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * The data used to create many SpeciesPosts.
     */
    data: SpeciesPostCreateManyInput | SpeciesPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpeciesPost update
   */
  export type SpeciesPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SpeciesPost.
     */
    data: XOR<SpeciesPostUpdateInput, SpeciesPostUncheckedUpdateInput>
    /**
     * Choose, which SpeciesPost to update.
     */
    where: SpeciesPostWhereUniqueInput
  }

  /**
   * SpeciesPost updateMany
   */
  export type SpeciesPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeciesPosts.
     */
    data: XOR<SpeciesPostUpdateManyMutationInput, SpeciesPostUncheckedUpdateManyInput>
    /**
     * Filter which SpeciesPosts to update
     */
    where?: SpeciesPostWhereInput
    /**
     * Limit how many SpeciesPosts to update.
     */
    limit?: number
  }

  /**
   * SpeciesPost updateManyAndReturn
   */
  export type SpeciesPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * The data used to update SpeciesPosts.
     */
    data: XOR<SpeciesPostUpdateManyMutationInput, SpeciesPostUncheckedUpdateManyInput>
    /**
     * Filter which SpeciesPosts to update
     */
    where?: SpeciesPostWhereInput
    /**
     * Limit how many SpeciesPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpeciesPost upsert
   */
  export type SpeciesPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SpeciesPost to update in case it exists.
     */
    where: SpeciesPostWhereUniqueInput
    /**
     * In case the SpeciesPost found by the `where` argument doesn't exist, create a new SpeciesPost with this data.
     */
    create: XOR<SpeciesPostCreateInput, SpeciesPostUncheckedCreateInput>
    /**
     * In case the SpeciesPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeciesPostUpdateInput, SpeciesPostUncheckedUpdateInput>
  }

  /**
   * SpeciesPost delete
   */
  export type SpeciesPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
    /**
     * Filter which SpeciesPost to delete.
     */
    where: SpeciesPostWhereUniqueInput
  }

  /**
   * SpeciesPost deleteMany
   */
  export type SpeciesPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeciesPosts to delete
     */
    where?: SpeciesPostWhereInput
    /**
     * Limit how many SpeciesPosts to delete.
     */
    limit?: number
  }

  /**
   * SpeciesPost.verifiedBy
   */
  export type SpeciesPost$verifiedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SpeciesPost without action
   */
  export type SpeciesPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeciesPost
     */
    select?: SpeciesPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeciesPost
     */
    omit?: SpeciesPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeciesPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpeciesScalarFieldEnum: {
    id: 'id',
    scientificName: 'scientificName',
    commonName: 'commonName',
    description: 'description',
    imageUrl: 'imageUrl',
    diet: 'diet',
    length: 'length',
    weight: 'weight',
    lifespan: 'lifespan',
    conservationStatus: 'conservationStatus',
    habitat: 'habitat',
    speciesType: 'speciesType',
    coloration: 'coloration',
    bodyShape: 'bodyShape',
    distinguishingMarks: 'distinguishingMarks',
    physicalFeatures: 'physicalFeatures',
    tracks: 'tracks',
    vocalizations: 'vocalizations',
    elevationRange: 'elevationRange',
    climate: 'climate',
    waterRequirements: 'waterRequirements',
    primaryRange: 'primaryRange',
    seasonalPresence: 'seasonalPresence',
    createdAt: 'createdAt'
  };

  export type SpeciesScalarFieldEnum = (typeof SpeciesScalarFieldEnum)[keyof typeof SpeciesScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    region: 'region',
    municipality: 'municipality',
    province: 'province',
    country: 'country',
    habitatType: 'habitatType',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SightingScalarFieldEnum: {
    id: 'id',
    userUid: 'userUid',
    speciesId: 'speciesId',
    locationId: 'locationId',
    locationName: 'locationName',
    notes: 'notes',
    status: 'status',
    observedAt: 'observedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SightingScalarFieldEnum = (typeof SightingScalarFieldEnum)[keyof typeof SightingScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    sightingId: 'sightingId',
    url: 'url',
    mimeType: 'mimeType',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const SpeciesPostScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    aiPrediction: 'aiPrediction',
    userNotes: 'userNotes',
    status: 'status',
    userUid: 'userUid',
    verifiedByUid: 'verifiedByUid',
    createdAt: 'createdAt'
  };

  export type SpeciesPostScalarFieldEnum = (typeof SpeciesPostScalarFieldEnum)[keyof typeof SpeciesPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SightingStatus'
   */
  export type EnumSightingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SightingStatus'>
    


  /**
   * Reference to a field of type 'SightingStatus[]'
   */
  export type ListEnumSightingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SightingStatus[]'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uid?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: SpeciesPostListRelationFilter
    sightings?: SightingListRelationFilter
    verified?: SpeciesPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uid?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    posts?: SpeciesPostOrderByRelationAggregateInput
    sightings?: SightingOrderByRelationAggregateInput
    verified?: SpeciesPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    posts?: SpeciesPostListRelationFilter
    sightings?: SightingListRelationFilter
    verified?: SpeciesPostListRelationFilter
  }, "uid" | "email">

  export type UserOrderByWithAggregationInput = {
    uid?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SpeciesWhereInput = {
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    id?: StringFilter<"Species"> | string
    scientificName?: StringFilter<"Species"> | string
    commonName?: StringNullableFilter<"Species"> | string | null
    description?: StringNullableFilter<"Species"> | string | null
    imageUrl?: StringNullableFilter<"Species"> | string | null
    diet?: StringNullableFilter<"Species"> | string | null
    length?: StringNullableFilter<"Species"> | string | null
    weight?: StringNullableFilter<"Species"> | string | null
    lifespan?: StringNullableFilter<"Species"> | string | null
    conservationStatus?: StringNullableFilter<"Species"> | string | null
    habitat?: StringNullableFilter<"Species"> | string | null
    speciesType?: StringNullableFilter<"Species"> | string | null
    coloration?: StringNullableFilter<"Species"> | string | null
    bodyShape?: StringNullableFilter<"Species"> | string | null
    distinguishingMarks?: StringNullableFilter<"Species"> | string | null
    physicalFeatures?: StringNullableFilter<"Species"> | string | null
    tracks?: StringNullableFilter<"Species"> | string | null
    vocalizations?: StringNullableFilter<"Species"> | string | null
    elevationRange?: StringNullableFilter<"Species"> | string | null
    climate?: StringNullableFilter<"Species"> | string | null
    waterRequirements?: StringNullableFilter<"Species"> | string | null
    primaryRange?: StringNullableFilter<"Species"> | string | null
    seasonalPresence?: StringNullableFilter<"Species"> | string | null
    createdAt?: DateTimeFilter<"Species"> | Date | string
    sightings?: SightingListRelationFilter
  }

  export type SpeciesOrderByWithRelationInput = {
    id?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    diet?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    lifespan?: SortOrderInput | SortOrder
    conservationStatus?: SortOrderInput | SortOrder
    habitat?: SortOrderInput | SortOrder
    speciesType?: SortOrderInput | SortOrder
    coloration?: SortOrderInput | SortOrder
    bodyShape?: SortOrderInput | SortOrder
    distinguishingMarks?: SortOrderInput | SortOrder
    physicalFeatures?: SortOrderInput | SortOrder
    tracks?: SortOrderInput | SortOrder
    vocalizations?: SortOrderInput | SortOrder
    elevationRange?: SortOrderInput | SortOrder
    climate?: SortOrderInput | SortOrder
    waterRequirements?: SortOrderInput | SortOrder
    primaryRange?: SortOrderInput | SortOrder
    seasonalPresence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sightings?: SightingOrderByRelationAggregateInput
  }

  export type SpeciesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeciesWhereInput | SpeciesWhereInput[]
    OR?: SpeciesWhereInput[]
    NOT?: SpeciesWhereInput | SpeciesWhereInput[]
    scientificName?: StringFilter<"Species"> | string
    commonName?: StringNullableFilter<"Species"> | string | null
    description?: StringNullableFilter<"Species"> | string | null
    imageUrl?: StringNullableFilter<"Species"> | string | null
    diet?: StringNullableFilter<"Species"> | string | null
    length?: StringNullableFilter<"Species"> | string | null
    weight?: StringNullableFilter<"Species"> | string | null
    lifespan?: StringNullableFilter<"Species"> | string | null
    conservationStatus?: StringNullableFilter<"Species"> | string | null
    habitat?: StringNullableFilter<"Species"> | string | null
    speciesType?: StringNullableFilter<"Species"> | string | null
    coloration?: StringNullableFilter<"Species"> | string | null
    bodyShape?: StringNullableFilter<"Species"> | string | null
    distinguishingMarks?: StringNullableFilter<"Species"> | string | null
    physicalFeatures?: StringNullableFilter<"Species"> | string | null
    tracks?: StringNullableFilter<"Species"> | string | null
    vocalizations?: StringNullableFilter<"Species"> | string | null
    elevationRange?: StringNullableFilter<"Species"> | string | null
    climate?: StringNullableFilter<"Species"> | string | null
    waterRequirements?: StringNullableFilter<"Species"> | string | null
    primaryRange?: StringNullableFilter<"Species"> | string | null
    seasonalPresence?: StringNullableFilter<"Species"> | string | null
    createdAt?: DateTimeFilter<"Species"> | Date | string
    sightings?: SightingListRelationFilter
  }, "id">

  export type SpeciesOrderByWithAggregationInput = {
    id?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    diet?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    lifespan?: SortOrderInput | SortOrder
    conservationStatus?: SortOrderInput | SortOrder
    habitat?: SortOrderInput | SortOrder
    speciesType?: SortOrderInput | SortOrder
    coloration?: SortOrderInput | SortOrder
    bodyShape?: SortOrderInput | SortOrder
    distinguishingMarks?: SortOrderInput | SortOrder
    physicalFeatures?: SortOrderInput | SortOrder
    tracks?: SortOrderInput | SortOrder
    vocalizations?: SortOrderInput | SortOrder
    elevationRange?: SortOrderInput | SortOrder
    climate?: SortOrderInput | SortOrder
    waterRequirements?: SortOrderInput | SortOrder
    primaryRange?: SortOrderInput | SortOrder
    seasonalPresence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SpeciesCountOrderByAggregateInput
    _max?: SpeciesMaxOrderByAggregateInput
    _min?: SpeciesMinOrderByAggregateInput
  }

  export type SpeciesScalarWhereWithAggregatesInput = {
    AND?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    OR?: SpeciesScalarWhereWithAggregatesInput[]
    NOT?: SpeciesScalarWhereWithAggregatesInput | SpeciesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Species"> | string
    scientificName?: StringWithAggregatesFilter<"Species"> | string
    commonName?: StringNullableWithAggregatesFilter<"Species"> | string | null
    description?: StringNullableWithAggregatesFilter<"Species"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Species"> | string | null
    diet?: StringNullableWithAggregatesFilter<"Species"> | string | null
    length?: StringNullableWithAggregatesFilter<"Species"> | string | null
    weight?: StringNullableWithAggregatesFilter<"Species"> | string | null
    lifespan?: StringNullableWithAggregatesFilter<"Species"> | string | null
    conservationStatus?: StringNullableWithAggregatesFilter<"Species"> | string | null
    habitat?: StringNullableWithAggregatesFilter<"Species"> | string | null
    speciesType?: StringNullableWithAggregatesFilter<"Species"> | string | null
    coloration?: StringNullableWithAggregatesFilter<"Species"> | string | null
    bodyShape?: StringNullableWithAggregatesFilter<"Species"> | string | null
    distinguishingMarks?: StringNullableWithAggregatesFilter<"Species"> | string | null
    physicalFeatures?: StringNullableWithAggregatesFilter<"Species"> | string | null
    tracks?: StringNullableWithAggregatesFilter<"Species"> | string | null
    vocalizations?: StringNullableWithAggregatesFilter<"Species"> | string | null
    elevationRange?: StringNullableWithAggregatesFilter<"Species"> | string | null
    climate?: StringNullableWithAggregatesFilter<"Species"> | string | null
    waterRequirements?: StringNullableWithAggregatesFilter<"Species"> | string | null
    primaryRange?: StringNullableWithAggregatesFilter<"Species"> | string | null
    seasonalPresence?: StringNullableWithAggregatesFilter<"Species"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Species"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    description?: StringNullableFilter<"Location"> | string | null
    region?: StringNullableFilter<"Location"> | string | null
    municipality?: StringNullableFilter<"Location"> | string | null
    province?: StringNullableFilter<"Location"> | string | null
    country?: StringNullableFilter<"Location"> | string | null
    habitatType?: StringNullableFilter<"Location"> | string | null
    latitude?: FloatNullableFilter<"Location"> | number | null
    longitude?: FloatNullableFilter<"Location"> | number | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    sightings?: SightingListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    habitatType?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sightings?: SightingOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    description?: StringNullableFilter<"Location"> | string | null
    region?: StringNullableFilter<"Location"> | string | null
    municipality?: StringNullableFilter<"Location"> | string | null
    province?: StringNullableFilter<"Location"> | string | null
    country?: StringNullableFilter<"Location"> | string | null
    habitatType?: StringNullableFilter<"Location"> | string | null
    latitude?: FloatNullableFilter<"Location"> | number | null
    longitude?: FloatNullableFilter<"Location"> | number | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    sightings?: SightingListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    municipality?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    habitatType?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    description?: StringNullableWithAggregatesFilter<"Location"> | string | null
    region?: StringNullableWithAggregatesFilter<"Location"> | string | null
    municipality?: StringNullableWithAggregatesFilter<"Location"> | string | null
    province?: StringNullableWithAggregatesFilter<"Location"> | string | null
    country?: StringNullableWithAggregatesFilter<"Location"> | string | null
    habitatType?: StringNullableWithAggregatesFilter<"Location"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type SightingWhereInput = {
    AND?: SightingWhereInput | SightingWhereInput[]
    OR?: SightingWhereInput[]
    NOT?: SightingWhereInput | SightingWhereInput[]
    id?: StringFilter<"Sighting"> | string
    userUid?: StringFilter<"Sighting"> | string
    speciesId?: StringNullableFilter<"Sighting"> | string | null
    locationId?: StringNullableFilter<"Sighting"> | string | null
    locationName?: StringNullableFilter<"Sighting"> | string | null
    notes?: StringNullableFilter<"Sighting"> | string | null
    status?: EnumSightingStatusFilter<"Sighting"> | $Enums.SightingStatus
    observedAt?: DateTimeFilter<"Sighting"> | Date | string
    createdAt?: DateTimeFilter<"Sighting"> | Date | string
    updatedAt?: DateTimeFilter<"Sighting"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    species?: XOR<SpeciesNullableScalarRelationFilter, SpeciesWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    media?: MediaListRelationFilter
  }

  export type SightingOrderByWithRelationInput = {
    id?: SortOrder
    userUid?: SortOrder
    speciesId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    locationName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    observedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    species?: SpeciesOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
  }

  export type SightingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SightingWhereInput | SightingWhereInput[]
    OR?: SightingWhereInput[]
    NOT?: SightingWhereInput | SightingWhereInput[]
    userUid?: StringFilter<"Sighting"> | string
    speciesId?: StringNullableFilter<"Sighting"> | string | null
    locationId?: StringNullableFilter<"Sighting"> | string | null
    locationName?: StringNullableFilter<"Sighting"> | string | null
    notes?: StringNullableFilter<"Sighting"> | string | null
    status?: EnumSightingStatusFilter<"Sighting"> | $Enums.SightingStatus
    observedAt?: DateTimeFilter<"Sighting"> | Date | string
    createdAt?: DateTimeFilter<"Sighting"> | Date | string
    updatedAt?: DateTimeFilter<"Sighting"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    species?: XOR<SpeciesNullableScalarRelationFilter, SpeciesWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    media?: MediaListRelationFilter
  }, "id">

  export type SightingOrderByWithAggregationInput = {
    id?: SortOrder
    userUid?: SortOrder
    speciesId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    locationName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    observedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SightingCountOrderByAggregateInput
    _max?: SightingMaxOrderByAggregateInput
    _min?: SightingMinOrderByAggregateInput
  }

  export type SightingScalarWhereWithAggregatesInput = {
    AND?: SightingScalarWhereWithAggregatesInput | SightingScalarWhereWithAggregatesInput[]
    OR?: SightingScalarWhereWithAggregatesInput[]
    NOT?: SightingScalarWhereWithAggregatesInput | SightingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sighting"> | string
    userUid?: StringWithAggregatesFilter<"Sighting"> | string
    speciesId?: StringNullableWithAggregatesFilter<"Sighting"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"Sighting"> | string | null
    locationName?: StringNullableWithAggregatesFilter<"Sighting"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Sighting"> | string | null
    status?: EnumSightingStatusWithAggregatesFilter<"Sighting"> | $Enums.SightingStatus
    observedAt?: DateTimeWithAggregatesFilter<"Sighting"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Sighting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sighting"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    sightingId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    mimeType?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    sighting?: XOR<SightingScalarRelationFilter, SightingWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    sightingId?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    sighting?: SightingOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    sightingId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    mimeType?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    sighting?: XOR<SightingScalarRelationFilter, SightingWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    sightingId?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    sightingId?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    mimeType?: StringWithAggregatesFilter<"Media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type SpeciesPostWhereInput = {
    AND?: SpeciesPostWhereInput | SpeciesPostWhereInput[]
    OR?: SpeciesPostWhereInput[]
    NOT?: SpeciesPostWhereInput | SpeciesPostWhereInput[]
    id?: StringFilter<"SpeciesPost"> | string
    imageUrl?: StringFilter<"SpeciesPost"> | string
    aiPrediction?: StringNullableFilter<"SpeciesPost"> | string | null
    userNotes?: StringNullableFilter<"SpeciesPost"> | string | null
    status?: EnumPostStatusFilter<"SpeciesPost"> | $Enums.PostStatus
    userUid?: StringFilter<"SpeciesPost"> | string
    verifiedByUid?: StringNullableFilter<"SpeciesPost"> | string | null
    createdAt?: DateTimeFilter<"SpeciesPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SpeciesPostOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    aiPrediction?: SortOrderInput | SortOrder
    userNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    userUid?: SortOrder
    verifiedByUid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    verifiedBy?: UserOrderByWithRelationInput
  }

  export type SpeciesPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeciesPostWhereInput | SpeciesPostWhereInput[]
    OR?: SpeciesPostWhereInput[]
    NOT?: SpeciesPostWhereInput | SpeciesPostWhereInput[]
    imageUrl?: StringFilter<"SpeciesPost"> | string
    aiPrediction?: StringNullableFilter<"SpeciesPost"> | string | null
    userNotes?: StringNullableFilter<"SpeciesPost"> | string | null
    status?: EnumPostStatusFilter<"SpeciesPost"> | $Enums.PostStatus
    userUid?: StringFilter<"SpeciesPost"> | string
    verifiedByUid?: StringNullableFilter<"SpeciesPost"> | string | null
    createdAt?: DateTimeFilter<"SpeciesPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SpeciesPostOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    aiPrediction?: SortOrderInput | SortOrder
    userNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    userUid?: SortOrder
    verifiedByUid?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SpeciesPostCountOrderByAggregateInput
    _max?: SpeciesPostMaxOrderByAggregateInput
    _min?: SpeciesPostMinOrderByAggregateInput
  }

  export type SpeciesPostScalarWhereWithAggregatesInput = {
    AND?: SpeciesPostScalarWhereWithAggregatesInput | SpeciesPostScalarWhereWithAggregatesInput[]
    OR?: SpeciesPostScalarWhereWithAggregatesInput[]
    NOT?: SpeciesPostScalarWhereWithAggregatesInput | SpeciesPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpeciesPost"> | string
    imageUrl?: StringWithAggregatesFilter<"SpeciesPost"> | string
    aiPrediction?: StringNullableWithAggregatesFilter<"SpeciesPost"> | string | null
    userNotes?: StringNullableWithAggregatesFilter<"SpeciesPost"> | string | null
    status?: EnumPostStatusWithAggregatesFilter<"SpeciesPost"> | $Enums.PostStatus
    userUid?: StringWithAggregatesFilter<"SpeciesPost"> | string
    verifiedByUid?: StringNullableWithAggregatesFilter<"SpeciesPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpeciesPost"> | Date | string
  }

  export type UserCreateInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    posts?: SpeciesPostCreateNestedManyWithoutUserInput
    sightings?: SightingCreateNestedManyWithoutUserInput
    verified?: SpeciesPostCreateNestedManyWithoutVerifiedByInput
  }

  export type UserUncheckedCreateInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    posts?: SpeciesPostUncheckedCreateNestedManyWithoutUserInput
    sightings?: SightingUncheckedCreateNestedManyWithoutUserInput
    verified?: SpeciesPostUncheckedCreateNestedManyWithoutVerifiedByInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: SpeciesPostUpdateManyWithoutUserNestedInput
    sightings?: SightingUpdateManyWithoutUserNestedInput
    verified?: SpeciesPostUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: SpeciesPostUncheckedUpdateManyWithoutUserNestedInput
    sightings?: SightingUncheckedUpdateManyWithoutUserNestedInput
    verified?: SpeciesPostUncheckedUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserCreateManyInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesCreateInput = {
    id?: string
    scientificName: string
    commonName?: string | null
    description?: string | null
    imageUrl?: string | null
    diet?: string | null
    length?: string | null
    weight?: string | null
    lifespan?: string | null
    conservationStatus?: string | null
    habitat?: string | null
    speciesType?: string | null
    coloration?: string | null
    bodyShape?: string | null
    distinguishingMarks?: string | null
    physicalFeatures?: string | null
    tracks?: string | null
    vocalizations?: string | null
    elevationRange?: string | null
    climate?: string | null
    waterRequirements?: string | null
    primaryRange?: string | null
    seasonalPresence?: string | null
    createdAt?: Date | string
    sightings?: SightingCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUncheckedCreateInput = {
    id?: string
    scientificName: string
    commonName?: string | null
    description?: string | null
    imageUrl?: string | null
    diet?: string | null
    length?: string | null
    weight?: string | null
    lifespan?: string | null
    conservationStatus?: string | null
    habitat?: string | null
    speciesType?: string | null
    coloration?: string | null
    bodyShape?: string | null
    distinguishingMarks?: string | null
    physicalFeatures?: string | null
    tracks?: string | null
    vocalizations?: string | null
    elevationRange?: string | null
    climate?: string | null
    waterRequirements?: string | null
    primaryRange?: string | null
    seasonalPresence?: string | null
    createdAt?: Date | string
    sightings?: SightingUncheckedCreateNestedManyWithoutSpeciesInput
  }

  export type SpeciesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    diet?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    lifespan?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    speciesType?: NullableStringFieldUpdateOperationsInput | string | null
    coloration?: NullableStringFieldUpdateOperationsInput | string | null
    bodyShape?: NullableStringFieldUpdateOperationsInput | string | null
    distinguishingMarks?: NullableStringFieldUpdateOperationsInput | string | null
    physicalFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    vocalizations?: NullableStringFieldUpdateOperationsInput | string | null
    elevationRange?: NullableStringFieldUpdateOperationsInput | string | null
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    waterRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    primaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalPresence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sightings?: SightingUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    diet?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    lifespan?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    speciesType?: NullableStringFieldUpdateOperationsInput | string | null
    coloration?: NullableStringFieldUpdateOperationsInput | string | null
    bodyShape?: NullableStringFieldUpdateOperationsInput | string | null
    distinguishingMarks?: NullableStringFieldUpdateOperationsInput | string | null
    physicalFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    vocalizations?: NullableStringFieldUpdateOperationsInput | string | null
    elevationRange?: NullableStringFieldUpdateOperationsInput | string | null
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    waterRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    primaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalPresence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sightings?: SightingUncheckedUpdateManyWithoutSpeciesNestedInput
  }

  export type SpeciesCreateManyInput = {
    id?: string
    scientificName: string
    commonName?: string | null
    description?: string | null
    imageUrl?: string | null
    diet?: string | null
    length?: string | null
    weight?: string | null
    lifespan?: string | null
    conservationStatus?: string | null
    habitat?: string | null
    speciesType?: string | null
    coloration?: string | null
    bodyShape?: string | null
    distinguishingMarks?: string | null
    physicalFeatures?: string | null
    tracks?: string | null
    vocalizations?: string | null
    elevationRange?: string | null
    climate?: string | null
    waterRequirements?: string | null
    primaryRange?: string | null
    seasonalPresence?: string | null
    createdAt?: Date | string
  }

  export type SpeciesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    diet?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    lifespan?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    speciesType?: NullableStringFieldUpdateOperationsInput | string | null
    coloration?: NullableStringFieldUpdateOperationsInput | string | null
    bodyShape?: NullableStringFieldUpdateOperationsInput | string | null
    distinguishingMarks?: NullableStringFieldUpdateOperationsInput | string | null
    physicalFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    vocalizations?: NullableStringFieldUpdateOperationsInput | string | null
    elevationRange?: NullableStringFieldUpdateOperationsInput | string | null
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    waterRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    primaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalPresence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    diet?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    lifespan?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    speciesType?: NullableStringFieldUpdateOperationsInput | string | null
    coloration?: NullableStringFieldUpdateOperationsInput | string | null
    bodyShape?: NullableStringFieldUpdateOperationsInput | string | null
    distinguishingMarks?: NullableStringFieldUpdateOperationsInput | string | null
    physicalFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    vocalizations?: NullableStringFieldUpdateOperationsInput | string | null
    elevationRange?: NullableStringFieldUpdateOperationsInput | string | null
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    waterRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    primaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalPresence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    description?: string | null
    region?: string | null
    municipality?: string | null
    province?: string | null
    country?: string | null
    habitatType?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    sightings?: SightingCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    region?: string | null
    municipality?: string | null
    province?: string | null
    country?: string | null
    habitatType?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    sightings?: SightingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    habitatType?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sightings?: SightingUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    habitatType?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sightings?: SightingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    region?: string | null
    municipality?: string | null
    province?: string | null
    country?: string | null
    habitatType?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    habitatType?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    habitatType?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SightingCreateInput = {
    id?: string
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSightingsInput
    species?: SpeciesCreateNestedOneWithoutSightingsInput
    location?: LocationCreateNestedOneWithoutSightingsInput
    media?: MediaCreateNestedManyWithoutSightingInput
  }

  export type SightingUncheckedCreateInput = {
    id?: string
    userUid: string
    speciesId?: string | null
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutSightingInput
  }

  export type SightingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSightingsNestedInput
    species?: SpeciesUpdateOneWithoutSightingsNestedInput
    location?: LocationUpdateOneWithoutSightingsNestedInput
    media?: MediaUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutSightingNestedInput
  }

  export type SightingCreateManyInput = {
    id?: string
    userUid: string
    speciesId?: string | null
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SightingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SightingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    mimeType: string
    createdAt?: Date | string
    sighting: SightingCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    sightingId: string
    url: string
    mimeType: string
    createdAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sighting?: SightingUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sightingId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    sightingId: string
    url: string
    mimeType: string
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sightingId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesPostCreateInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type SpeciesPostUncheckedCreateInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    userUid: string
    verifiedByUid?: string | null
    createdAt?: Date | string
  }

  export type SpeciesPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type SpeciesPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userUid?: StringFieldUpdateOperationsInput | string
    verifiedByUid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesPostCreateManyInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    userUid: string
    verifiedByUid?: string | null
    createdAt?: Date | string
  }

  export type SpeciesPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userUid?: StringFieldUpdateOperationsInput | string
    verifiedByUid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SpeciesPostListRelationFilter = {
    every?: SpeciesPostWhereInput
    some?: SpeciesPostWhereInput
    none?: SpeciesPostWhereInput
  }

  export type SightingListRelationFilter = {
    every?: SightingWhereInput
    some?: SightingWhereInput
    none?: SightingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SpeciesPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SightingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SpeciesCountOrderByAggregateInput = {
    id?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    diet?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    lifespan?: SortOrder
    conservationStatus?: SortOrder
    habitat?: SortOrder
    speciesType?: SortOrder
    coloration?: SortOrder
    bodyShape?: SortOrder
    distinguishingMarks?: SortOrder
    physicalFeatures?: SortOrder
    tracks?: SortOrder
    vocalizations?: SortOrder
    elevationRange?: SortOrder
    climate?: SortOrder
    waterRequirements?: SortOrder
    primaryRange?: SortOrder
    seasonalPresence?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeciesMaxOrderByAggregateInput = {
    id?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    diet?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    lifespan?: SortOrder
    conservationStatus?: SortOrder
    habitat?: SortOrder
    speciesType?: SortOrder
    coloration?: SortOrder
    bodyShape?: SortOrder
    distinguishingMarks?: SortOrder
    physicalFeatures?: SortOrder
    tracks?: SortOrder
    vocalizations?: SortOrder
    elevationRange?: SortOrder
    climate?: SortOrder
    waterRequirements?: SortOrder
    primaryRange?: SortOrder
    seasonalPresence?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeciesMinOrderByAggregateInput = {
    id?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    diet?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    lifespan?: SortOrder
    conservationStatus?: SortOrder
    habitat?: SortOrder
    speciesType?: SortOrder
    coloration?: SortOrder
    bodyShape?: SortOrder
    distinguishingMarks?: SortOrder
    physicalFeatures?: SortOrder
    tracks?: SortOrder
    vocalizations?: SortOrder
    elevationRange?: SortOrder
    climate?: SortOrder
    waterRequirements?: SortOrder
    primaryRange?: SortOrder
    seasonalPresence?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    region?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    country?: SortOrder
    habitatType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    region?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    country?: SortOrder
    habitatType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    region?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    country?: SortOrder
    habitatType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSightingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SightingStatus | EnumSightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSightingStatusFilter<$PrismaModel> | $Enums.SightingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpeciesNullableScalarRelationFilter = {
    is?: SpeciesWhereInput | null
    isNot?: SpeciesWhereInput | null
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SightingCountOrderByAggregateInput = {
    id?: SortOrder
    userUid?: SortOrder
    speciesId?: SortOrder
    locationId?: SortOrder
    locationName?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    observedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SightingMaxOrderByAggregateInput = {
    id?: SortOrder
    userUid?: SortOrder
    speciesId?: SortOrder
    locationId?: SortOrder
    locationName?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    observedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SightingMinOrderByAggregateInput = {
    id?: SortOrder
    userUid?: SortOrder
    speciesId?: SortOrder
    locationId?: SortOrder
    locationName?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    observedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSightingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SightingStatus | EnumSightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSightingStatusWithAggregatesFilter<$PrismaModel> | $Enums.SightingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSightingStatusFilter<$PrismaModel>
    _max?: NestedEnumSightingStatusFilter<$PrismaModel>
  }

  export type SightingScalarRelationFilter = {
    is?: SightingWhereInput
    isNot?: SightingWhereInput
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    sightingId?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    sightingId?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    sightingId?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SpeciesPostCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    aiPrediction?: SortOrder
    userNotes?: SortOrder
    status?: SortOrder
    userUid?: SortOrder
    verifiedByUid?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeciesPostMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    aiPrediction?: SortOrder
    userNotes?: SortOrder
    status?: SortOrder
    userUid?: SortOrder
    verifiedByUid?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeciesPostMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    aiPrediction?: SortOrder
    userNotes?: SortOrder
    status?: SortOrder
    userUid?: SortOrder
    verifiedByUid?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type SpeciesPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SpeciesPostCreateWithoutUserInput, SpeciesPostUncheckedCreateWithoutUserInput> | SpeciesPostCreateWithoutUserInput[] | SpeciesPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutUserInput | SpeciesPostCreateOrConnectWithoutUserInput[]
    createMany?: SpeciesPostCreateManyUserInputEnvelope
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
  }

  export type SightingCreateNestedManyWithoutUserInput = {
    create?: XOR<SightingCreateWithoutUserInput, SightingUncheckedCreateWithoutUserInput> | SightingCreateWithoutUserInput[] | SightingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutUserInput | SightingCreateOrConnectWithoutUserInput[]
    createMany?: SightingCreateManyUserInputEnvelope
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
  }

  export type SpeciesPostCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<SpeciesPostCreateWithoutVerifiedByInput, SpeciesPostUncheckedCreateWithoutVerifiedByInput> | SpeciesPostCreateWithoutVerifiedByInput[] | SpeciesPostUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutVerifiedByInput | SpeciesPostCreateOrConnectWithoutVerifiedByInput[]
    createMany?: SpeciesPostCreateManyVerifiedByInputEnvelope
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
  }

  export type SpeciesPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpeciesPostCreateWithoutUserInput, SpeciesPostUncheckedCreateWithoutUserInput> | SpeciesPostCreateWithoutUserInput[] | SpeciesPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutUserInput | SpeciesPostCreateOrConnectWithoutUserInput[]
    createMany?: SpeciesPostCreateManyUserInputEnvelope
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
  }

  export type SightingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SightingCreateWithoutUserInput, SightingUncheckedCreateWithoutUserInput> | SightingCreateWithoutUserInput[] | SightingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutUserInput | SightingCreateOrConnectWithoutUserInput[]
    createMany?: SightingCreateManyUserInputEnvelope
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
  }

  export type SpeciesPostUncheckedCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<SpeciesPostCreateWithoutVerifiedByInput, SpeciesPostUncheckedCreateWithoutVerifiedByInput> | SpeciesPostCreateWithoutVerifiedByInput[] | SpeciesPostUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutVerifiedByInput | SpeciesPostCreateOrConnectWithoutVerifiedByInput[]
    createMany?: SpeciesPostCreateManyVerifiedByInputEnvelope
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SpeciesPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpeciesPostCreateWithoutUserInput, SpeciesPostUncheckedCreateWithoutUserInput> | SpeciesPostCreateWithoutUserInput[] | SpeciesPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutUserInput | SpeciesPostCreateOrConnectWithoutUserInput[]
    upsert?: SpeciesPostUpsertWithWhereUniqueWithoutUserInput | SpeciesPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpeciesPostCreateManyUserInputEnvelope
    set?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    disconnect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    delete?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    update?: SpeciesPostUpdateWithWhereUniqueWithoutUserInput | SpeciesPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpeciesPostUpdateManyWithWhereWithoutUserInput | SpeciesPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpeciesPostScalarWhereInput | SpeciesPostScalarWhereInput[]
  }

  export type SightingUpdateManyWithoutUserNestedInput = {
    create?: XOR<SightingCreateWithoutUserInput, SightingUncheckedCreateWithoutUserInput> | SightingCreateWithoutUserInput[] | SightingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutUserInput | SightingCreateOrConnectWithoutUserInput[]
    upsert?: SightingUpsertWithWhereUniqueWithoutUserInput | SightingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SightingCreateManyUserInputEnvelope
    set?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    disconnect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    delete?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    update?: SightingUpdateWithWhereUniqueWithoutUserInput | SightingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SightingUpdateManyWithWhereWithoutUserInput | SightingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SightingScalarWhereInput | SightingScalarWhereInput[]
  }

  export type SpeciesPostUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<SpeciesPostCreateWithoutVerifiedByInput, SpeciesPostUncheckedCreateWithoutVerifiedByInput> | SpeciesPostCreateWithoutVerifiedByInput[] | SpeciesPostUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutVerifiedByInput | SpeciesPostCreateOrConnectWithoutVerifiedByInput[]
    upsert?: SpeciesPostUpsertWithWhereUniqueWithoutVerifiedByInput | SpeciesPostUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: SpeciesPostCreateManyVerifiedByInputEnvelope
    set?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    disconnect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    delete?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    update?: SpeciesPostUpdateWithWhereUniqueWithoutVerifiedByInput | SpeciesPostUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: SpeciesPostUpdateManyWithWhereWithoutVerifiedByInput | SpeciesPostUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: SpeciesPostScalarWhereInput | SpeciesPostScalarWhereInput[]
  }

  export type SpeciesPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpeciesPostCreateWithoutUserInput, SpeciesPostUncheckedCreateWithoutUserInput> | SpeciesPostCreateWithoutUserInput[] | SpeciesPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutUserInput | SpeciesPostCreateOrConnectWithoutUserInput[]
    upsert?: SpeciesPostUpsertWithWhereUniqueWithoutUserInput | SpeciesPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpeciesPostCreateManyUserInputEnvelope
    set?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    disconnect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    delete?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    update?: SpeciesPostUpdateWithWhereUniqueWithoutUserInput | SpeciesPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpeciesPostUpdateManyWithWhereWithoutUserInput | SpeciesPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpeciesPostScalarWhereInput | SpeciesPostScalarWhereInput[]
  }

  export type SightingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SightingCreateWithoutUserInput, SightingUncheckedCreateWithoutUserInput> | SightingCreateWithoutUserInput[] | SightingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutUserInput | SightingCreateOrConnectWithoutUserInput[]
    upsert?: SightingUpsertWithWhereUniqueWithoutUserInput | SightingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SightingCreateManyUserInputEnvelope
    set?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    disconnect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    delete?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    update?: SightingUpdateWithWhereUniqueWithoutUserInput | SightingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SightingUpdateManyWithWhereWithoutUserInput | SightingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SightingScalarWhereInput | SightingScalarWhereInput[]
  }

  export type SpeciesPostUncheckedUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<SpeciesPostCreateWithoutVerifiedByInput, SpeciesPostUncheckedCreateWithoutVerifiedByInput> | SpeciesPostCreateWithoutVerifiedByInput[] | SpeciesPostUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: SpeciesPostCreateOrConnectWithoutVerifiedByInput | SpeciesPostCreateOrConnectWithoutVerifiedByInput[]
    upsert?: SpeciesPostUpsertWithWhereUniqueWithoutVerifiedByInput | SpeciesPostUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: SpeciesPostCreateManyVerifiedByInputEnvelope
    set?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    disconnect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    delete?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    connect?: SpeciesPostWhereUniqueInput | SpeciesPostWhereUniqueInput[]
    update?: SpeciesPostUpdateWithWhereUniqueWithoutVerifiedByInput | SpeciesPostUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: SpeciesPostUpdateManyWithWhereWithoutVerifiedByInput | SpeciesPostUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: SpeciesPostScalarWhereInput | SpeciesPostScalarWhereInput[]
  }

  export type SightingCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<SightingCreateWithoutSpeciesInput, SightingUncheckedCreateWithoutSpeciesInput> | SightingCreateWithoutSpeciesInput[] | SightingUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutSpeciesInput | SightingCreateOrConnectWithoutSpeciesInput[]
    createMany?: SightingCreateManySpeciesInputEnvelope
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
  }

  export type SightingUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: XOR<SightingCreateWithoutSpeciesInput, SightingUncheckedCreateWithoutSpeciesInput> | SightingCreateWithoutSpeciesInput[] | SightingUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutSpeciesInput | SightingCreateOrConnectWithoutSpeciesInput[]
    createMany?: SightingCreateManySpeciesInputEnvelope
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
  }

  export type SightingUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<SightingCreateWithoutSpeciesInput, SightingUncheckedCreateWithoutSpeciesInput> | SightingCreateWithoutSpeciesInput[] | SightingUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutSpeciesInput | SightingCreateOrConnectWithoutSpeciesInput[]
    upsert?: SightingUpsertWithWhereUniqueWithoutSpeciesInput | SightingUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: SightingCreateManySpeciesInputEnvelope
    set?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    disconnect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    delete?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    update?: SightingUpdateWithWhereUniqueWithoutSpeciesInput | SightingUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: SightingUpdateManyWithWhereWithoutSpeciesInput | SightingUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: SightingScalarWhereInput | SightingScalarWhereInput[]
  }

  export type SightingUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: XOR<SightingCreateWithoutSpeciesInput, SightingUncheckedCreateWithoutSpeciesInput> | SightingCreateWithoutSpeciesInput[] | SightingUncheckedCreateWithoutSpeciesInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutSpeciesInput | SightingCreateOrConnectWithoutSpeciesInput[]
    upsert?: SightingUpsertWithWhereUniqueWithoutSpeciesInput | SightingUpsertWithWhereUniqueWithoutSpeciesInput[]
    createMany?: SightingCreateManySpeciesInputEnvelope
    set?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    disconnect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    delete?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    update?: SightingUpdateWithWhereUniqueWithoutSpeciesInput | SightingUpdateWithWhereUniqueWithoutSpeciesInput[]
    updateMany?: SightingUpdateManyWithWhereWithoutSpeciesInput | SightingUpdateManyWithWhereWithoutSpeciesInput[]
    deleteMany?: SightingScalarWhereInput | SightingScalarWhereInput[]
  }

  export type SightingCreateNestedManyWithoutLocationInput = {
    create?: XOR<SightingCreateWithoutLocationInput, SightingUncheckedCreateWithoutLocationInput> | SightingCreateWithoutLocationInput[] | SightingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutLocationInput | SightingCreateOrConnectWithoutLocationInput[]
    createMany?: SightingCreateManyLocationInputEnvelope
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
  }

  export type SightingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<SightingCreateWithoutLocationInput, SightingUncheckedCreateWithoutLocationInput> | SightingCreateWithoutLocationInput[] | SightingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutLocationInput | SightingCreateOrConnectWithoutLocationInput[]
    createMany?: SightingCreateManyLocationInputEnvelope
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SightingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SightingCreateWithoutLocationInput, SightingUncheckedCreateWithoutLocationInput> | SightingCreateWithoutLocationInput[] | SightingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutLocationInput | SightingCreateOrConnectWithoutLocationInput[]
    upsert?: SightingUpsertWithWhereUniqueWithoutLocationInput | SightingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SightingCreateManyLocationInputEnvelope
    set?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    disconnect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    delete?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    update?: SightingUpdateWithWhereUniqueWithoutLocationInput | SightingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SightingUpdateManyWithWhereWithoutLocationInput | SightingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SightingScalarWhereInput | SightingScalarWhereInput[]
  }

  export type SightingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SightingCreateWithoutLocationInput, SightingUncheckedCreateWithoutLocationInput> | SightingCreateWithoutLocationInput[] | SightingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SightingCreateOrConnectWithoutLocationInput | SightingCreateOrConnectWithoutLocationInput[]
    upsert?: SightingUpsertWithWhereUniqueWithoutLocationInput | SightingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SightingCreateManyLocationInputEnvelope
    set?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    disconnect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    delete?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    connect?: SightingWhereUniqueInput | SightingWhereUniqueInput[]
    update?: SightingUpdateWithWhereUniqueWithoutLocationInput | SightingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SightingUpdateManyWithWhereWithoutLocationInput | SightingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SightingScalarWhereInput | SightingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSightingsInput = {
    create?: XOR<UserCreateWithoutSightingsInput, UserUncheckedCreateWithoutSightingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSightingsInput
    connect?: UserWhereUniqueInput
  }

  export type SpeciesCreateNestedOneWithoutSightingsInput = {
    create?: XOR<SpeciesCreateWithoutSightingsInput, SpeciesUncheckedCreateWithoutSightingsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutSightingsInput
    connect?: SpeciesWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutSightingsInput = {
    create?: XOR<LocationCreateWithoutSightingsInput, LocationUncheckedCreateWithoutSightingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSightingsInput
    connect?: LocationWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutSightingInput = {
    create?: XOR<MediaCreateWithoutSightingInput, MediaUncheckedCreateWithoutSightingInput> | MediaCreateWithoutSightingInput[] | MediaUncheckedCreateWithoutSightingInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutSightingInput | MediaCreateOrConnectWithoutSightingInput[]
    createMany?: MediaCreateManySightingInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutSightingInput = {
    create?: XOR<MediaCreateWithoutSightingInput, MediaUncheckedCreateWithoutSightingInput> | MediaCreateWithoutSightingInput[] | MediaUncheckedCreateWithoutSightingInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutSightingInput | MediaCreateOrConnectWithoutSightingInput[]
    createMany?: MediaCreateManySightingInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type EnumSightingStatusFieldUpdateOperationsInput = {
    set?: $Enums.SightingStatus
  }

  export type UserUpdateOneRequiredWithoutSightingsNestedInput = {
    create?: XOR<UserCreateWithoutSightingsInput, UserUncheckedCreateWithoutSightingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSightingsInput
    upsert?: UserUpsertWithoutSightingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSightingsInput, UserUpdateWithoutSightingsInput>, UserUncheckedUpdateWithoutSightingsInput>
  }

  export type SpeciesUpdateOneWithoutSightingsNestedInput = {
    create?: XOR<SpeciesCreateWithoutSightingsInput, SpeciesUncheckedCreateWithoutSightingsInput>
    connectOrCreate?: SpeciesCreateOrConnectWithoutSightingsInput
    upsert?: SpeciesUpsertWithoutSightingsInput
    disconnect?: SpeciesWhereInput | boolean
    delete?: SpeciesWhereInput | boolean
    connect?: SpeciesWhereUniqueInput
    update?: XOR<XOR<SpeciesUpdateToOneWithWhereWithoutSightingsInput, SpeciesUpdateWithoutSightingsInput>, SpeciesUncheckedUpdateWithoutSightingsInput>
  }

  export type LocationUpdateOneWithoutSightingsNestedInput = {
    create?: XOR<LocationCreateWithoutSightingsInput, LocationUncheckedCreateWithoutSightingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSightingsInput
    upsert?: LocationUpsertWithoutSightingsInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutSightingsInput, LocationUpdateWithoutSightingsInput>, LocationUncheckedUpdateWithoutSightingsInput>
  }

  export type MediaUpdateManyWithoutSightingNestedInput = {
    create?: XOR<MediaCreateWithoutSightingInput, MediaUncheckedCreateWithoutSightingInput> | MediaCreateWithoutSightingInput[] | MediaUncheckedCreateWithoutSightingInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutSightingInput | MediaCreateOrConnectWithoutSightingInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutSightingInput | MediaUpsertWithWhereUniqueWithoutSightingInput[]
    createMany?: MediaCreateManySightingInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutSightingInput | MediaUpdateWithWhereUniqueWithoutSightingInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutSightingInput | MediaUpdateManyWithWhereWithoutSightingInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutSightingNestedInput = {
    create?: XOR<MediaCreateWithoutSightingInput, MediaUncheckedCreateWithoutSightingInput> | MediaCreateWithoutSightingInput[] | MediaUncheckedCreateWithoutSightingInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutSightingInput | MediaCreateOrConnectWithoutSightingInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutSightingInput | MediaUpsertWithWhereUniqueWithoutSightingInput[]
    createMany?: MediaCreateManySightingInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutSightingInput | MediaUpdateWithWhereUniqueWithoutSightingInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutSightingInput | MediaUpdateManyWithWhereWithoutSightingInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type SightingCreateNestedOneWithoutMediaInput = {
    create?: XOR<SightingCreateWithoutMediaInput, SightingUncheckedCreateWithoutMediaInput>
    connectOrCreate?: SightingCreateOrConnectWithoutMediaInput
    connect?: SightingWhereUniqueInput
  }

  export type SightingUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<SightingCreateWithoutMediaInput, SightingUncheckedCreateWithoutMediaInput>
    connectOrCreate?: SightingCreateOrConnectWithoutMediaInput
    upsert?: SightingUpsertWithoutMediaInput
    connect?: SightingWhereUniqueInput
    update?: XOR<XOR<SightingUpdateToOneWithWhereWithoutMediaInput, SightingUpdateWithoutMediaInput>, SightingUncheckedUpdateWithoutMediaInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedInput = {
    create?: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneWithoutVerifiedNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedInput
    upsert?: UserUpsertWithoutVerifiedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedInput, UserUpdateWithoutVerifiedInput>, UserUncheckedUpdateWithoutVerifiedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSightingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SightingStatus | EnumSightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSightingStatusFilter<$PrismaModel> | $Enums.SightingStatus
  }

  export type NestedEnumSightingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SightingStatus | EnumSightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SightingStatus[] | ListEnumSightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSightingStatusWithAggregatesFilter<$PrismaModel> | $Enums.SightingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSightingStatusFilter<$PrismaModel>
    _max?: NestedEnumSightingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type SpeciesPostCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    createdAt?: Date | string
    verifiedBy?: UserCreateNestedOneWithoutVerifiedInput
  }

  export type SpeciesPostUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    verifiedByUid?: string | null
    createdAt?: Date | string
  }

  export type SpeciesPostCreateOrConnectWithoutUserInput = {
    where: SpeciesPostWhereUniqueInput
    create: XOR<SpeciesPostCreateWithoutUserInput, SpeciesPostUncheckedCreateWithoutUserInput>
  }

  export type SpeciesPostCreateManyUserInputEnvelope = {
    data: SpeciesPostCreateManyUserInput | SpeciesPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SightingCreateWithoutUserInput = {
    id?: string
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    species?: SpeciesCreateNestedOneWithoutSightingsInput
    location?: LocationCreateNestedOneWithoutSightingsInput
    media?: MediaCreateNestedManyWithoutSightingInput
  }

  export type SightingUncheckedCreateWithoutUserInput = {
    id?: string
    speciesId?: string | null
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutSightingInput
  }

  export type SightingCreateOrConnectWithoutUserInput = {
    where: SightingWhereUniqueInput
    create: XOR<SightingCreateWithoutUserInput, SightingUncheckedCreateWithoutUserInput>
  }

  export type SightingCreateManyUserInputEnvelope = {
    data: SightingCreateManyUserInput | SightingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpeciesPostCreateWithoutVerifiedByInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type SpeciesPostUncheckedCreateWithoutVerifiedByInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    userUid: string
    createdAt?: Date | string
  }

  export type SpeciesPostCreateOrConnectWithoutVerifiedByInput = {
    where: SpeciesPostWhereUniqueInput
    create: XOR<SpeciesPostCreateWithoutVerifiedByInput, SpeciesPostUncheckedCreateWithoutVerifiedByInput>
  }

  export type SpeciesPostCreateManyVerifiedByInputEnvelope = {
    data: SpeciesPostCreateManyVerifiedByInput | SpeciesPostCreateManyVerifiedByInput[]
    skipDuplicates?: boolean
  }

  export type SpeciesPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SpeciesPostWhereUniqueInput
    update: XOR<SpeciesPostUpdateWithoutUserInput, SpeciesPostUncheckedUpdateWithoutUserInput>
    create: XOR<SpeciesPostCreateWithoutUserInput, SpeciesPostUncheckedCreateWithoutUserInput>
  }

  export type SpeciesPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SpeciesPostWhereUniqueInput
    data: XOR<SpeciesPostUpdateWithoutUserInput, SpeciesPostUncheckedUpdateWithoutUserInput>
  }

  export type SpeciesPostUpdateManyWithWhereWithoutUserInput = {
    where: SpeciesPostScalarWhereInput
    data: XOR<SpeciesPostUpdateManyMutationInput, SpeciesPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SpeciesPostScalarWhereInput = {
    AND?: SpeciesPostScalarWhereInput | SpeciesPostScalarWhereInput[]
    OR?: SpeciesPostScalarWhereInput[]
    NOT?: SpeciesPostScalarWhereInput | SpeciesPostScalarWhereInput[]
    id?: StringFilter<"SpeciesPost"> | string
    imageUrl?: StringFilter<"SpeciesPost"> | string
    aiPrediction?: StringNullableFilter<"SpeciesPost"> | string | null
    userNotes?: StringNullableFilter<"SpeciesPost"> | string | null
    status?: EnumPostStatusFilter<"SpeciesPost"> | $Enums.PostStatus
    userUid?: StringFilter<"SpeciesPost"> | string
    verifiedByUid?: StringNullableFilter<"SpeciesPost"> | string | null
    createdAt?: DateTimeFilter<"SpeciesPost"> | Date | string
  }

  export type SightingUpsertWithWhereUniqueWithoutUserInput = {
    where: SightingWhereUniqueInput
    update: XOR<SightingUpdateWithoutUserInput, SightingUncheckedUpdateWithoutUserInput>
    create: XOR<SightingCreateWithoutUserInput, SightingUncheckedCreateWithoutUserInput>
  }

  export type SightingUpdateWithWhereUniqueWithoutUserInput = {
    where: SightingWhereUniqueInput
    data: XOR<SightingUpdateWithoutUserInput, SightingUncheckedUpdateWithoutUserInput>
  }

  export type SightingUpdateManyWithWhereWithoutUserInput = {
    where: SightingScalarWhereInput
    data: XOR<SightingUpdateManyMutationInput, SightingUncheckedUpdateManyWithoutUserInput>
  }

  export type SightingScalarWhereInput = {
    AND?: SightingScalarWhereInput | SightingScalarWhereInput[]
    OR?: SightingScalarWhereInput[]
    NOT?: SightingScalarWhereInput | SightingScalarWhereInput[]
    id?: StringFilter<"Sighting"> | string
    userUid?: StringFilter<"Sighting"> | string
    speciesId?: StringNullableFilter<"Sighting"> | string | null
    locationId?: StringNullableFilter<"Sighting"> | string | null
    locationName?: StringNullableFilter<"Sighting"> | string | null
    notes?: StringNullableFilter<"Sighting"> | string | null
    status?: EnumSightingStatusFilter<"Sighting"> | $Enums.SightingStatus
    observedAt?: DateTimeFilter<"Sighting"> | Date | string
    createdAt?: DateTimeFilter<"Sighting"> | Date | string
    updatedAt?: DateTimeFilter<"Sighting"> | Date | string
  }

  export type SpeciesPostUpsertWithWhereUniqueWithoutVerifiedByInput = {
    where: SpeciesPostWhereUniqueInput
    update: XOR<SpeciesPostUpdateWithoutVerifiedByInput, SpeciesPostUncheckedUpdateWithoutVerifiedByInput>
    create: XOR<SpeciesPostCreateWithoutVerifiedByInput, SpeciesPostUncheckedCreateWithoutVerifiedByInput>
  }

  export type SpeciesPostUpdateWithWhereUniqueWithoutVerifiedByInput = {
    where: SpeciesPostWhereUniqueInput
    data: XOR<SpeciesPostUpdateWithoutVerifiedByInput, SpeciesPostUncheckedUpdateWithoutVerifiedByInput>
  }

  export type SpeciesPostUpdateManyWithWhereWithoutVerifiedByInput = {
    where: SpeciesPostScalarWhereInput
    data: XOR<SpeciesPostUpdateManyMutationInput, SpeciesPostUncheckedUpdateManyWithoutVerifiedByInput>
  }

  export type SightingCreateWithoutSpeciesInput = {
    id?: string
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSightingsInput
    location?: LocationCreateNestedOneWithoutSightingsInput
    media?: MediaCreateNestedManyWithoutSightingInput
  }

  export type SightingUncheckedCreateWithoutSpeciesInput = {
    id?: string
    userUid: string
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutSightingInput
  }

  export type SightingCreateOrConnectWithoutSpeciesInput = {
    where: SightingWhereUniqueInput
    create: XOR<SightingCreateWithoutSpeciesInput, SightingUncheckedCreateWithoutSpeciesInput>
  }

  export type SightingCreateManySpeciesInputEnvelope = {
    data: SightingCreateManySpeciesInput | SightingCreateManySpeciesInput[]
    skipDuplicates?: boolean
  }

  export type SightingUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: SightingWhereUniqueInput
    update: XOR<SightingUpdateWithoutSpeciesInput, SightingUncheckedUpdateWithoutSpeciesInput>
    create: XOR<SightingCreateWithoutSpeciesInput, SightingUncheckedCreateWithoutSpeciesInput>
  }

  export type SightingUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: SightingWhereUniqueInput
    data: XOR<SightingUpdateWithoutSpeciesInput, SightingUncheckedUpdateWithoutSpeciesInput>
  }

  export type SightingUpdateManyWithWhereWithoutSpeciesInput = {
    where: SightingScalarWhereInput
    data: XOR<SightingUpdateManyMutationInput, SightingUncheckedUpdateManyWithoutSpeciesInput>
  }

  export type SightingCreateWithoutLocationInput = {
    id?: string
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSightingsInput
    species?: SpeciesCreateNestedOneWithoutSightingsInput
    media?: MediaCreateNestedManyWithoutSightingInput
  }

  export type SightingUncheckedCreateWithoutLocationInput = {
    id?: string
    userUid: string
    speciesId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutSightingInput
  }

  export type SightingCreateOrConnectWithoutLocationInput = {
    where: SightingWhereUniqueInput
    create: XOR<SightingCreateWithoutLocationInput, SightingUncheckedCreateWithoutLocationInput>
  }

  export type SightingCreateManyLocationInputEnvelope = {
    data: SightingCreateManyLocationInput | SightingCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type SightingUpsertWithWhereUniqueWithoutLocationInput = {
    where: SightingWhereUniqueInput
    update: XOR<SightingUpdateWithoutLocationInput, SightingUncheckedUpdateWithoutLocationInput>
    create: XOR<SightingCreateWithoutLocationInput, SightingUncheckedCreateWithoutLocationInput>
  }

  export type SightingUpdateWithWhereUniqueWithoutLocationInput = {
    where: SightingWhereUniqueInput
    data: XOR<SightingUpdateWithoutLocationInput, SightingUncheckedUpdateWithoutLocationInput>
  }

  export type SightingUpdateManyWithWhereWithoutLocationInput = {
    where: SightingScalarWhereInput
    data: XOR<SightingUpdateManyMutationInput, SightingUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserCreateWithoutSightingsInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    posts?: SpeciesPostCreateNestedManyWithoutUserInput
    verified?: SpeciesPostCreateNestedManyWithoutVerifiedByInput
  }

  export type UserUncheckedCreateWithoutSightingsInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    posts?: SpeciesPostUncheckedCreateNestedManyWithoutUserInput
    verified?: SpeciesPostUncheckedCreateNestedManyWithoutVerifiedByInput
  }

  export type UserCreateOrConnectWithoutSightingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSightingsInput, UserUncheckedCreateWithoutSightingsInput>
  }

  export type SpeciesCreateWithoutSightingsInput = {
    id?: string
    scientificName: string
    commonName?: string | null
    description?: string | null
    imageUrl?: string | null
    diet?: string | null
    length?: string | null
    weight?: string | null
    lifespan?: string | null
    conservationStatus?: string | null
    habitat?: string | null
    speciesType?: string | null
    coloration?: string | null
    bodyShape?: string | null
    distinguishingMarks?: string | null
    physicalFeatures?: string | null
    tracks?: string | null
    vocalizations?: string | null
    elevationRange?: string | null
    climate?: string | null
    waterRequirements?: string | null
    primaryRange?: string | null
    seasonalPresence?: string | null
    createdAt?: Date | string
  }

  export type SpeciesUncheckedCreateWithoutSightingsInput = {
    id?: string
    scientificName: string
    commonName?: string | null
    description?: string | null
    imageUrl?: string | null
    diet?: string | null
    length?: string | null
    weight?: string | null
    lifespan?: string | null
    conservationStatus?: string | null
    habitat?: string | null
    speciesType?: string | null
    coloration?: string | null
    bodyShape?: string | null
    distinguishingMarks?: string | null
    physicalFeatures?: string | null
    tracks?: string | null
    vocalizations?: string | null
    elevationRange?: string | null
    climate?: string | null
    waterRequirements?: string | null
    primaryRange?: string | null
    seasonalPresence?: string | null
    createdAt?: Date | string
  }

  export type SpeciesCreateOrConnectWithoutSightingsInput = {
    where: SpeciesWhereUniqueInput
    create: XOR<SpeciesCreateWithoutSightingsInput, SpeciesUncheckedCreateWithoutSightingsInput>
  }

  export type LocationCreateWithoutSightingsInput = {
    id?: string
    name: string
    description?: string | null
    region?: string | null
    municipality?: string | null
    province?: string | null
    country?: string | null
    habitatType?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutSightingsInput = {
    id?: string
    name: string
    description?: string | null
    region?: string | null
    municipality?: string | null
    province?: string | null
    country?: string | null
    habitatType?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutSightingsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSightingsInput, LocationUncheckedCreateWithoutSightingsInput>
  }

  export type MediaCreateWithoutSightingInput = {
    id?: string
    url: string
    mimeType: string
    createdAt?: Date | string
  }

  export type MediaUncheckedCreateWithoutSightingInput = {
    id?: string
    url: string
    mimeType: string
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutSightingInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutSightingInput, MediaUncheckedCreateWithoutSightingInput>
  }

  export type MediaCreateManySightingInputEnvelope = {
    data: MediaCreateManySightingInput | MediaCreateManySightingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSightingsInput = {
    update: XOR<UserUpdateWithoutSightingsInput, UserUncheckedUpdateWithoutSightingsInput>
    create: XOR<UserCreateWithoutSightingsInput, UserUncheckedCreateWithoutSightingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSightingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSightingsInput, UserUncheckedUpdateWithoutSightingsInput>
  }

  export type UserUpdateWithoutSightingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: SpeciesPostUpdateManyWithoutUserNestedInput
    verified?: SpeciesPostUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSightingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: SpeciesPostUncheckedUpdateManyWithoutUserNestedInput
    verified?: SpeciesPostUncheckedUpdateManyWithoutVerifiedByNestedInput
  }

  export type SpeciesUpsertWithoutSightingsInput = {
    update: XOR<SpeciesUpdateWithoutSightingsInput, SpeciesUncheckedUpdateWithoutSightingsInput>
    create: XOR<SpeciesCreateWithoutSightingsInput, SpeciesUncheckedCreateWithoutSightingsInput>
    where?: SpeciesWhereInput
  }

  export type SpeciesUpdateToOneWithWhereWithoutSightingsInput = {
    where?: SpeciesWhereInput
    data: XOR<SpeciesUpdateWithoutSightingsInput, SpeciesUncheckedUpdateWithoutSightingsInput>
  }

  export type SpeciesUpdateWithoutSightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    diet?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    lifespan?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    speciesType?: NullableStringFieldUpdateOperationsInput | string | null
    coloration?: NullableStringFieldUpdateOperationsInput | string | null
    bodyShape?: NullableStringFieldUpdateOperationsInput | string | null
    distinguishingMarks?: NullableStringFieldUpdateOperationsInput | string | null
    physicalFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    vocalizations?: NullableStringFieldUpdateOperationsInput | string | null
    elevationRange?: NullableStringFieldUpdateOperationsInput | string | null
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    waterRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    primaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalPresence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesUncheckedUpdateWithoutSightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    diet?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    lifespan?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    speciesType?: NullableStringFieldUpdateOperationsInput | string | null
    coloration?: NullableStringFieldUpdateOperationsInput | string | null
    bodyShape?: NullableStringFieldUpdateOperationsInput | string | null
    distinguishingMarks?: NullableStringFieldUpdateOperationsInput | string | null
    physicalFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: NullableStringFieldUpdateOperationsInput | string | null
    vocalizations?: NullableStringFieldUpdateOperationsInput | string | null
    elevationRange?: NullableStringFieldUpdateOperationsInput | string | null
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    waterRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    primaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    seasonalPresence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithoutSightingsInput = {
    update: XOR<LocationUpdateWithoutSightingsInput, LocationUncheckedUpdateWithoutSightingsInput>
    create: XOR<LocationCreateWithoutSightingsInput, LocationUncheckedCreateWithoutSightingsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutSightingsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutSightingsInput, LocationUncheckedUpdateWithoutSightingsInput>
  }

  export type LocationUpdateWithoutSightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    habitatType?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutSightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    municipality?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    habitatType?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutSightingInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutSightingInput, MediaUncheckedUpdateWithoutSightingInput>
    create: XOR<MediaCreateWithoutSightingInput, MediaUncheckedCreateWithoutSightingInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutSightingInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutSightingInput, MediaUncheckedUpdateWithoutSightingInput>
  }

  export type MediaUpdateManyWithWhereWithoutSightingInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutSightingInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    sightingId?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    mimeType?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type SightingCreateWithoutMediaInput = {
    id?: string
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSightingsInput
    species?: SpeciesCreateNestedOneWithoutSightingsInput
    location?: LocationCreateNestedOneWithoutSightingsInput
  }

  export type SightingUncheckedCreateWithoutMediaInput = {
    id?: string
    userUid: string
    speciesId?: string | null
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SightingCreateOrConnectWithoutMediaInput = {
    where: SightingWhereUniqueInput
    create: XOR<SightingCreateWithoutMediaInput, SightingUncheckedCreateWithoutMediaInput>
  }

  export type SightingUpsertWithoutMediaInput = {
    update: XOR<SightingUpdateWithoutMediaInput, SightingUncheckedUpdateWithoutMediaInput>
    create: XOR<SightingCreateWithoutMediaInput, SightingUncheckedCreateWithoutMediaInput>
    where?: SightingWhereInput
  }

  export type SightingUpdateToOneWithWhereWithoutMediaInput = {
    where?: SightingWhereInput
    data: XOR<SightingUpdateWithoutMediaInput, SightingUncheckedUpdateWithoutMediaInput>
  }

  export type SightingUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSightingsNestedInput
    species?: SpeciesUpdateOneWithoutSightingsNestedInput
    location?: LocationUpdateOneWithoutSightingsNestedInput
  }

  export type SightingUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    sightings?: SightingCreateNestedManyWithoutUserInput
    verified?: SpeciesPostCreateNestedManyWithoutVerifiedByInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    sightings?: SightingUncheckedCreateNestedManyWithoutUserInput
    verified?: SpeciesPostUncheckedCreateNestedManyWithoutVerifiedByInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutVerifiedInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    posts?: SpeciesPostCreateNestedManyWithoutUserInput
    sightings?: SightingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedInput = {
    uid: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    posts?: SpeciesPostUncheckedCreateNestedManyWithoutUserInput
    sightings?: SightingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sightings?: SightingUpdateManyWithoutUserNestedInput
    verified?: SpeciesPostUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sightings?: SightingUncheckedUpdateManyWithoutUserNestedInput
    verified?: SpeciesPostUncheckedUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserUpsertWithoutVerifiedInput = {
    update: XOR<UserUpdateWithoutVerifiedInput, UserUncheckedUpdateWithoutVerifiedInput>
    create: XOR<UserCreateWithoutVerifiedInput, UserUncheckedCreateWithoutVerifiedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedInput, UserUncheckedUpdateWithoutVerifiedInput>
  }

  export type UserUpdateWithoutVerifiedInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: SpeciesPostUpdateManyWithoutUserNestedInput
    sightings?: SightingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: SpeciesPostUncheckedUpdateManyWithoutUserNestedInput
    sightings?: SightingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpeciesPostCreateManyUserInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    verifiedByUid?: string | null
    createdAt?: Date | string
  }

  export type SightingCreateManyUserInput = {
    id?: string
    speciesId?: string | null
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeciesPostCreateManyVerifiedByInput = {
    id?: string
    imageUrl: string
    aiPrediction?: string | null
    userNotes?: string | null
    status?: $Enums.PostStatus
    userUid: string
    createdAt?: Date | string
  }

  export type SpeciesPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedBy?: UserUpdateOneWithoutVerifiedNestedInput
  }

  export type SpeciesPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    verifiedByUid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    verifiedByUid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SightingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    species?: SpeciesUpdateOneWithoutSightingsNestedInput
    location?: LocationUpdateOneWithoutSightingsNestedInput
    media?: MediaUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesPostUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type SpeciesPostUncheckedUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userUid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeciesPostUncheckedUpdateManyWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    aiPrediction?: NullableStringFieldUpdateOperationsInput | string | null
    userNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    userUid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SightingCreateManySpeciesInput = {
    id?: string
    userUid: string
    locationId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SightingUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSightingsNestedInput
    location?: LocationUpdateOneWithoutSightingsNestedInput
    media?: MediaUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateManyWithoutSpeciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SightingCreateManyLocationInput = {
    id?: string
    userUid: string
    speciesId?: string | null
    locationName?: string | null
    notes?: string | null
    status?: $Enums.SightingStatus
    observedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SightingUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSightingsNestedInput
    species?: SpeciesUpdateOneWithoutSightingsNestedInput
    media?: MediaUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutSightingNestedInput
  }

  export type SightingUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userUid?: StringFieldUpdateOperationsInput | string
    speciesId?: NullableStringFieldUpdateOperationsInput | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSightingStatusFieldUpdateOperationsInput | $Enums.SightingStatus
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManySightingInput = {
    id?: string
    url: string
    mimeType: string
    createdAt?: Date | string
  }

  export type MediaUpdateWithoutSightingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutSightingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutSightingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}