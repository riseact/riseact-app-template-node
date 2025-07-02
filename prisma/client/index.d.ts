
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
 * Model OrganizationCredentials
 * 
 */
export type OrganizationCredentials = $Result.DefaultSelection<Prisma.$OrganizationCredentialsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OrganizationCredentials
 * const organizationCredentials = await prisma.organizationCredentials.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more OrganizationCredentials
   * const organizationCredentials = await prisma.organizationCredentials.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.organizationCredentials`: Exposes CRUD operations for the **OrganizationCredentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationCredentials
    * const organizationCredentials = await prisma.organizationCredentials.findMany()
    * ```
    */
  get organizationCredentials(): Prisma.OrganizationCredentialsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    OrganizationCredentials: 'OrganizationCredentials'
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
      modelProps: "organizationCredentials"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OrganizationCredentials: {
        payload: Prisma.$OrganizationCredentialsPayload<ExtArgs>
        fields: Prisma.OrganizationCredentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationCredentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationCredentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>
          }
          findFirst: {
            args: Prisma.OrganizationCredentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationCredentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>
          }
          findMany: {
            args: Prisma.OrganizationCredentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>[]
          }
          create: {
            args: Prisma.OrganizationCredentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>
          }
          createMany: {
            args: Prisma.OrganizationCredentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCredentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>[]
          }
          delete: {
            args: Prisma.OrganizationCredentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>
          }
          update: {
            args: Prisma.OrganizationCredentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationCredentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationCredentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationCredentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationCredentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationCredentialsPayload>
          }
          aggregate: {
            args: Prisma.OrganizationCredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationCredentials>
          }
          groupBy: {
            args: Prisma.OrganizationCredentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCredentialsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCredentialsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    organizationCredentials?: OrganizationCredentialsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model OrganizationCredentials
   */

  export type AggregateOrganizationCredentials = {
    _count: OrganizationCredentialsCountAggregateOutputType | null
    _avg: OrganizationCredentialsAvgAggregateOutputType | null
    _sum: OrganizationCredentialsSumAggregateOutputType | null
    _min: OrganizationCredentialsMinAggregateOutputType | null
    _max: OrganizationCredentialsMaxAggregateOutputType | null
  }

  export type OrganizationCredentialsAvgAggregateOutputType = {
    expiresInSeconds: number | null
  }

  export type OrganizationCredentialsSumAggregateOutputType = {
    expiresInSeconds: number | null
  }

  export type OrganizationCredentialsMinAggregateOutputType = {
    organizationDomain: string | null
    accessToken: string | null
    refreshToken: string | null
    clientToken: string | null
    expiresDateUTC: Date | null
    expiresInSeconds: number | null
  }

  export type OrganizationCredentialsMaxAggregateOutputType = {
    organizationDomain: string | null
    accessToken: string | null
    refreshToken: string | null
    clientToken: string | null
    expiresDateUTC: Date | null
    expiresInSeconds: number | null
  }

  export type OrganizationCredentialsCountAggregateOutputType = {
    organizationDomain: number
    accessToken: number
    refreshToken: number
    clientToken: number
    expiresDateUTC: number
    expiresInSeconds: number
    _all: number
  }


  export type OrganizationCredentialsAvgAggregateInputType = {
    expiresInSeconds?: true
  }

  export type OrganizationCredentialsSumAggregateInputType = {
    expiresInSeconds?: true
  }

  export type OrganizationCredentialsMinAggregateInputType = {
    organizationDomain?: true
    accessToken?: true
    refreshToken?: true
    clientToken?: true
    expiresDateUTC?: true
    expiresInSeconds?: true
  }

  export type OrganizationCredentialsMaxAggregateInputType = {
    organizationDomain?: true
    accessToken?: true
    refreshToken?: true
    clientToken?: true
    expiresDateUTC?: true
    expiresInSeconds?: true
  }

  export type OrganizationCredentialsCountAggregateInputType = {
    organizationDomain?: true
    accessToken?: true
    refreshToken?: true
    clientToken?: true
    expiresDateUTC?: true
    expiresInSeconds?: true
    _all?: true
  }

  export type OrganizationCredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationCredentials to aggregate.
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationCredentials to fetch.
     */
    orderBy?: OrganizationCredentialsOrderByWithRelationInput | OrganizationCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationCredentials
    **/
    _count?: true | OrganizationCredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationCredentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationCredentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationCredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationCredentialsMaxAggregateInputType
  }

  export type GetOrganizationCredentialsAggregateType<T extends OrganizationCredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationCredentials[P]>
      : GetScalarType<T[P], AggregateOrganizationCredentials[P]>
  }




  export type OrganizationCredentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationCredentialsWhereInput
    orderBy?: OrganizationCredentialsOrderByWithAggregationInput | OrganizationCredentialsOrderByWithAggregationInput[]
    by: OrganizationCredentialsScalarFieldEnum[] | OrganizationCredentialsScalarFieldEnum
    having?: OrganizationCredentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCredentialsCountAggregateInputType | true
    _avg?: OrganizationCredentialsAvgAggregateInputType
    _sum?: OrganizationCredentialsSumAggregateInputType
    _min?: OrganizationCredentialsMinAggregateInputType
    _max?: OrganizationCredentialsMaxAggregateInputType
  }

  export type OrganizationCredentialsGroupByOutputType = {
    organizationDomain: string
    accessToken: string
    refreshToken: string
    clientToken: string
    expiresDateUTC: Date
    expiresInSeconds: number
    _count: OrganizationCredentialsCountAggregateOutputType | null
    _avg: OrganizationCredentialsAvgAggregateOutputType | null
    _sum: OrganizationCredentialsSumAggregateOutputType | null
    _min: OrganizationCredentialsMinAggregateOutputType | null
    _max: OrganizationCredentialsMaxAggregateOutputType | null
  }

  type GetOrganizationCredentialsGroupByPayload<T extends OrganizationCredentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationCredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationCredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationCredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationCredentialsGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationCredentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationDomain?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    clientToken?: boolean
    expiresDateUTC?: boolean
    expiresInSeconds?: boolean
  }, ExtArgs["result"]["organizationCredentials"]>

  export type OrganizationCredentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationDomain?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    clientToken?: boolean
    expiresDateUTC?: boolean
    expiresInSeconds?: boolean
  }, ExtArgs["result"]["organizationCredentials"]>

  export type OrganizationCredentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationDomain?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    clientToken?: boolean
    expiresDateUTC?: boolean
    expiresInSeconds?: boolean
  }, ExtArgs["result"]["organizationCredentials"]>

  export type OrganizationCredentialsSelectScalar = {
    organizationDomain?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    clientToken?: boolean
    expiresDateUTC?: boolean
    expiresInSeconds?: boolean
  }

  export type OrganizationCredentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizationDomain" | "accessToken" | "refreshToken" | "clientToken" | "expiresDateUTC" | "expiresInSeconds", ExtArgs["result"]["organizationCredentials"]>

  export type $OrganizationCredentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationCredentials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      organizationDomain: string
      accessToken: string
      refreshToken: string
      clientToken: string
      expiresDateUTC: Date
      expiresInSeconds: number
    }, ExtArgs["result"]["organizationCredentials"]>
    composites: {}
  }

  type OrganizationCredentialsGetPayload<S extends boolean | null | undefined | OrganizationCredentialsDefaultArgs> = $Result.GetResult<Prisma.$OrganizationCredentialsPayload, S>

  type OrganizationCredentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationCredentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCredentialsCountAggregateInputType | true
    }

  export interface OrganizationCredentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationCredentials'], meta: { name: 'OrganizationCredentials' } }
    /**
     * Find zero or one OrganizationCredentials that matches the filter.
     * @param {OrganizationCredentialsFindUniqueArgs} args - Arguments to find a OrganizationCredentials
     * @example
     * // Get one OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationCredentialsFindUniqueArgs>(args: SelectSubset<T, OrganizationCredentialsFindUniqueArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationCredentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationCredentialsFindUniqueOrThrowArgs} args - Arguments to find a OrganizationCredentials
     * @example
     * // Get one OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationCredentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationCredentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsFindFirstArgs} args - Arguments to find a OrganizationCredentials
     * @example
     * // Get one OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationCredentialsFindFirstArgs>(args?: SelectSubset<T, OrganizationCredentialsFindFirstArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationCredentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsFindFirstOrThrowArgs} args - Arguments to find a OrganizationCredentials
     * @example
     * // Get one OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationCredentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationCredentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.findMany()
     * 
     * // Get first 10 OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.findMany({ take: 10 })
     * 
     * // Only select the `organizationDomain`
     * const organizationCredentialsWithOrganizationDomainOnly = await prisma.organizationCredentials.findMany({ select: { organizationDomain: true } })
     * 
     */
    findMany<T extends OrganizationCredentialsFindManyArgs>(args?: SelectSubset<T, OrganizationCredentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationCredentials.
     * @param {OrganizationCredentialsCreateArgs} args - Arguments to create a OrganizationCredentials.
     * @example
     * // Create one OrganizationCredentials
     * const OrganizationCredentials = await prisma.organizationCredentials.create({
     *   data: {
     *     // ... data to create a OrganizationCredentials
     *   }
     * })
     * 
     */
    create<T extends OrganizationCredentialsCreateArgs>(args: SelectSubset<T, OrganizationCredentialsCreateArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationCredentials.
     * @param {OrganizationCredentialsCreateManyArgs} args - Arguments to create many OrganizationCredentials.
     * @example
     * // Create many OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCredentialsCreateManyArgs>(args?: SelectSubset<T, OrganizationCredentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationCredentials and returns the data saved in the database.
     * @param {OrganizationCredentialsCreateManyAndReturnArgs} args - Arguments to create many OrganizationCredentials.
     * @example
     * // Create many OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationCredentials and only return the `organizationDomain`
     * const organizationCredentialsWithOrganizationDomainOnly = await prisma.organizationCredentials.createManyAndReturn({
     *   select: { organizationDomain: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCredentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCredentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationCredentials.
     * @param {OrganizationCredentialsDeleteArgs} args - Arguments to delete one OrganizationCredentials.
     * @example
     * // Delete one OrganizationCredentials
     * const OrganizationCredentials = await prisma.organizationCredentials.delete({
     *   where: {
     *     // ... filter to delete one OrganizationCredentials
     *   }
     * })
     * 
     */
    delete<T extends OrganizationCredentialsDeleteArgs>(args: SelectSubset<T, OrganizationCredentialsDeleteArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationCredentials.
     * @param {OrganizationCredentialsUpdateArgs} args - Arguments to update one OrganizationCredentials.
     * @example
     * // Update one OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationCredentialsUpdateArgs>(args: SelectSubset<T, OrganizationCredentialsUpdateArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationCredentials.
     * @param {OrganizationCredentialsDeleteManyArgs} args - Arguments to filter OrganizationCredentials to delete.
     * @example
     * // Delete a few OrganizationCredentials
     * const { count } = await prisma.organizationCredentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationCredentialsDeleteManyArgs>(args?: SelectSubset<T, OrganizationCredentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationCredentialsUpdateManyArgs>(args: SelectSubset<T, OrganizationCredentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationCredentials and returns the data updated in the database.
     * @param {OrganizationCredentialsUpdateManyAndReturnArgs} args - Arguments to update many OrganizationCredentials.
     * @example
     * // Update many OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationCredentials and only return the `organizationDomain`
     * const organizationCredentialsWithOrganizationDomainOnly = await prisma.organizationCredentials.updateManyAndReturn({
     *   select: { organizationDomain: true },
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
    updateManyAndReturn<T extends OrganizationCredentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationCredentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationCredentials.
     * @param {OrganizationCredentialsUpsertArgs} args - Arguments to update or create a OrganizationCredentials.
     * @example
     * // Update or create a OrganizationCredentials
     * const organizationCredentials = await prisma.organizationCredentials.upsert({
     *   create: {
     *     // ... data to create a OrganizationCredentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationCredentials we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationCredentialsUpsertArgs>(args: SelectSubset<T, OrganizationCredentialsUpsertArgs<ExtArgs>>): Prisma__OrganizationCredentialsClient<$Result.GetResult<Prisma.$OrganizationCredentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsCountArgs} args - Arguments to filter OrganizationCredentials to count.
     * @example
     * // Count the number of OrganizationCredentials
     * const count = await prisma.organizationCredentials.count({
     *   where: {
     *     // ... the filter for the OrganizationCredentials we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCredentialsCountArgs>(
      args?: Subset<T, OrganizationCredentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationCredentialsAggregateArgs>(args: Subset<T, OrganizationCredentialsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationCredentialsAggregateType<T>>

    /**
     * Group by OrganizationCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCredentialsGroupByArgs} args - Group by arguments.
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
      T extends OrganizationCredentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationCredentialsGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationCredentialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationCredentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationCredentials model
   */
  readonly fields: OrganizationCredentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationCredentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationCredentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OrganizationCredentials model
   */
  interface OrganizationCredentialsFieldRefs {
    readonly organizationDomain: FieldRef<"OrganizationCredentials", 'String'>
    readonly accessToken: FieldRef<"OrganizationCredentials", 'String'>
    readonly refreshToken: FieldRef<"OrganizationCredentials", 'String'>
    readonly clientToken: FieldRef<"OrganizationCredentials", 'String'>
    readonly expiresDateUTC: FieldRef<"OrganizationCredentials", 'DateTime'>
    readonly expiresInSeconds: FieldRef<"OrganizationCredentials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationCredentials findUnique
   */
  export type OrganizationCredentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationCredentials to fetch.
     */
    where: OrganizationCredentialsWhereUniqueInput
  }

  /**
   * OrganizationCredentials findUniqueOrThrow
   */
  export type OrganizationCredentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationCredentials to fetch.
     */
    where: OrganizationCredentialsWhereUniqueInput
  }

  /**
   * OrganizationCredentials findFirst
   */
  export type OrganizationCredentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationCredentials to fetch.
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationCredentials to fetch.
     */
    orderBy?: OrganizationCredentialsOrderByWithRelationInput | OrganizationCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationCredentials.
     */
    cursor?: OrganizationCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationCredentials.
     */
    distinct?: OrganizationCredentialsScalarFieldEnum | OrganizationCredentialsScalarFieldEnum[]
  }

  /**
   * OrganizationCredentials findFirstOrThrow
   */
  export type OrganizationCredentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationCredentials to fetch.
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationCredentials to fetch.
     */
    orderBy?: OrganizationCredentialsOrderByWithRelationInput | OrganizationCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationCredentials.
     */
    cursor?: OrganizationCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationCredentials.
     */
    distinct?: OrganizationCredentialsScalarFieldEnum | OrganizationCredentialsScalarFieldEnum[]
  }

  /**
   * OrganizationCredentials findMany
   */
  export type OrganizationCredentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationCredentials to fetch.
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationCredentials to fetch.
     */
    orderBy?: OrganizationCredentialsOrderByWithRelationInput | OrganizationCredentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationCredentials.
     */
    cursor?: OrganizationCredentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationCredentials.
     */
    skip?: number
    distinct?: OrganizationCredentialsScalarFieldEnum | OrganizationCredentialsScalarFieldEnum[]
  }

  /**
   * OrganizationCredentials create
   */
  export type OrganizationCredentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * The data needed to create a OrganizationCredentials.
     */
    data: XOR<OrganizationCredentialsCreateInput, OrganizationCredentialsUncheckedCreateInput>
  }

  /**
   * OrganizationCredentials createMany
   */
  export type OrganizationCredentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationCredentials.
     */
    data: OrganizationCredentialsCreateManyInput | OrganizationCredentialsCreateManyInput[]
  }

  /**
   * OrganizationCredentials createManyAndReturn
   */
  export type OrganizationCredentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationCredentials.
     */
    data: OrganizationCredentialsCreateManyInput | OrganizationCredentialsCreateManyInput[]
  }

  /**
   * OrganizationCredentials update
   */
  export type OrganizationCredentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * The data needed to update a OrganizationCredentials.
     */
    data: XOR<OrganizationCredentialsUpdateInput, OrganizationCredentialsUncheckedUpdateInput>
    /**
     * Choose, which OrganizationCredentials to update.
     */
    where: OrganizationCredentialsWhereUniqueInput
  }

  /**
   * OrganizationCredentials updateMany
   */
  export type OrganizationCredentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationCredentials.
     */
    data: XOR<OrganizationCredentialsUpdateManyMutationInput, OrganizationCredentialsUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationCredentials to update
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * Limit how many OrganizationCredentials to update.
     */
    limit?: number
  }

  /**
   * OrganizationCredentials updateManyAndReturn
   */
  export type OrganizationCredentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationCredentials.
     */
    data: XOR<OrganizationCredentialsUpdateManyMutationInput, OrganizationCredentialsUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationCredentials to update
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * Limit how many OrganizationCredentials to update.
     */
    limit?: number
  }

  /**
   * OrganizationCredentials upsert
   */
  export type OrganizationCredentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * The filter to search for the OrganizationCredentials to update in case it exists.
     */
    where: OrganizationCredentialsWhereUniqueInput
    /**
     * In case the OrganizationCredentials found by the `where` argument doesn't exist, create a new OrganizationCredentials with this data.
     */
    create: XOR<OrganizationCredentialsCreateInput, OrganizationCredentialsUncheckedCreateInput>
    /**
     * In case the OrganizationCredentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationCredentialsUpdateInput, OrganizationCredentialsUncheckedUpdateInput>
  }

  /**
   * OrganizationCredentials delete
   */
  export type OrganizationCredentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
    /**
     * Filter which OrganizationCredentials to delete.
     */
    where: OrganizationCredentialsWhereUniqueInput
  }

  /**
   * OrganizationCredentials deleteMany
   */
  export type OrganizationCredentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationCredentials to delete
     */
    where?: OrganizationCredentialsWhereInput
    /**
     * Limit how many OrganizationCredentials to delete.
     */
    limit?: number
  }

  /**
   * OrganizationCredentials without action
   */
  export type OrganizationCredentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCredentials
     */
    select?: OrganizationCredentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationCredentials
     */
    omit?: OrganizationCredentialsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationCredentialsScalarFieldEnum: {
    organizationDomain: 'organizationDomain',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    clientToken: 'clientToken',
    expiresDateUTC: 'expiresDateUTC',
    expiresInSeconds: 'expiresInSeconds'
  };

  export type OrganizationCredentialsScalarFieldEnum = (typeof OrganizationCredentialsScalarFieldEnum)[keyof typeof OrganizationCredentialsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationCredentialsWhereInput = {
    AND?: OrganizationCredentialsWhereInput | OrganizationCredentialsWhereInput[]
    OR?: OrganizationCredentialsWhereInput[]
    NOT?: OrganizationCredentialsWhereInput | OrganizationCredentialsWhereInput[]
    organizationDomain?: StringFilter<"OrganizationCredentials"> | string
    accessToken?: StringFilter<"OrganizationCredentials"> | string
    refreshToken?: StringFilter<"OrganizationCredentials"> | string
    clientToken?: StringFilter<"OrganizationCredentials"> | string
    expiresDateUTC?: DateTimeFilter<"OrganizationCredentials"> | Date | string
    expiresInSeconds?: IntFilter<"OrganizationCredentials"> | number
  }

  export type OrganizationCredentialsOrderByWithRelationInput = {
    organizationDomain?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    clientToken?: SortOrder
    expiresDateUTC?: SortOrder
    expiresInSeconds?: SortOrder
  }

  export type OrganizationCredentialsWhereUniqueInput = Prisma.AtLeast<{
    organizationDomain?: string
    AND?: OrganizationCredentialsWhereInput | OrganizationCredentialsWhereInput[]
    OR?: OrganizationCredentialsWhereInput[]
    NOT?: OrganizationCredentialsWhereInput | OrganizationCredentialsWhereInput[]
    accessToken?: StringFilter<"OrganizationCredentials"> | string
    refreshToken?: StringFilter<"OrganizationCredentials"> | string
    clientToken?: StringFilter<"OrganizationCredentials"> | string
    expiresDateUTC?: DateTimeFilter<"OrganizationCredentials"> | Date | string
    expiresInSeconds?: IntFilter<"OrganizationCredentials"> | number
  }, "organizationDomain">

  export type OrganizationCredentialsOrderByWithAggregationInput = {
    organizationDomain?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    clientToken?: SortOrder
    expiresDateUTC?: SortOrder
    expiresInSeconds?: SortOrder
    _count?: OrganizationCredentialsCountOrderByAggregateInput
    _avg?: OrganizationCredentialsAvgOrderByAggregateInput
    _max?: OrganizationCredentialsMaxOrderByAggregateInput
    _min?: OrganizationCredentialsMinOrderByAggregateInput
    _sum?: OrganizationCredentialsSumOrderByAggregateInput
  }

  export type OrganizationCredentialsScalarWhereWithAggregatesInput = {
    AND?: OrganizationCredentialsScalarWhereWithAggregatesInput | OrganizationCredentialsScalarWhereWithAggregatesInput[]
    OR?: OrganizationCredentialsScalarWhereWithAggregatesInput[]
    NOT?: OrganizationCredentialsScalarWhereWithAggregatesInput | OrganizationCredentialsScalarWhereWithAggregatesInput[]
    organizationDomain?: StringWithAggregatesFilter<"OrganizationCredentials"> | string
    accessToken?: StringWithAggregatesFilter<"OrganizationCredentials"> | string
    refreshToken?: StringWithAggregatesFilter<"OrganizationCredentials"> | string
    clientToken?: StringWithAggregatesFilter<"OrganizationCredentials"> | string
    expiresDateUTC?: DateTimeWithAggregatesFilter<"OrganizationCredentials"> | Date | string
    expiresInSeconds?: IntWithAggregatesFilter<"OrganizationCredentials"> | number
  }

  export type OrganizationCredentialsCreateInput = {
    organizationDomain: string
    accessToken: string
    refreshToken: string
    clientToken: string
    expiresDateUTC: Date | string
    expiresInSeconds: number
  }

  export type OrganizationCredentialsUncheckedCreateInput = {
    organizationDomain: string
    accessToken: string
    refreshToken: string
    clientToken: string
    expiresDateUTC: Date | string
    expiresInSeconds: number
  }

  export type OrganizationCredentialsUpdateInput = {
    organizationDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    clientToken?: StringFieldUpdateOperationsInput | string
    expiresDateUTC?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresInSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationCredentialsUncheckedUpdateInput = {
    organizationDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    clientToken?: StringFieldUpdateOperationsInput | string
    expiresDateUTC?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresInSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationCredentialsCreateManyInput = {
    organizationDomain: string
    accessToken: string
    refreshToken: string
    clientToken: string
    expiresDateUTC: Date | string
    expiresInSeconds: number
  }

  export type OrganizationCredentialsUpdateManyMutationInput = {
    organizationDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    clientToken?: StringFieldUpdateOperationsInput | string
    expiresDateUTC?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresInSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationCredentialsUncheckedUpdateManyInput = {
    organizationDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    clientToken?: StringFieldUpdateOperationsInput | string
    expiresDateUTC?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresInSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrganizationCredentialsCountOrderByAggregateInput = {
    organizationDomain?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    clientToken?: SortOrder
    expiresDateUTC?: SortOrder
    expiresInSeconds?: SortOrder
  }

  export type OrganizationCredentialsAvgOrderByAggregateInput = {
    expiresInSeconds?: SortOrder
  }

  export type OrganizationCredentialsMaxOrderByAggregateInput = {
    organizationDomain?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    clientToken?: SortOrder
    expiresDateUTC?: SortOrder
    expiresInSeconds?: SortOrder
  }

  export type OrganizationCredentialsMinOrderByAggregateInput = {
    organizationDomain?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    clientToken?: SortOrder
    expiresDateUTC?: SortOrder
    expiresInSeconds?: SortOrder
  }

  export type OrganizationCredentialsSumOrderByAggregateInput = {
    expiresInSeconds?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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