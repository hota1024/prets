import { PretsType } from './types/PretsType'
import { PretsTypeChecker } from './types/PretsTypeChecker'
import { PretsTypeNormalizer } from './types/PretsTypeNormalizer'

/**
 * TypeObject type.
 */
export type TypeObject = {
  type: PretsType
  checker: PretsTypeChecker
  normalizer: PretsTypeNormalizer
}

/**
 * TypeManager class.
 */
export class TypeManager {
  /**
   * types.
   */
  public readonly types: PretsType[] = []

  /**
   * type checkers.
   */
  public readonly typeCheckers: PretsTypeChecker[] = []

  /**
   * type normalizers.
   */
  public readonly typeNormalizers: PretsTypeNormalizer[] = []

  /**
   * TypeManager constructor.
   *
   * @param options options.
   */
  constructor(
    options: {
      types?: PretsType[]
      typeCheckers?: PretsTypeChecker[]
      typeNormalizers?: PretsTypeNormalizer[]
    } = {}
  ) {
    if (options.types) {
      this.types = options.types
    }

    if (options.typeCheckers) {
      this.typeCheckers = options.typeCheckers
    }

    if (options.typeNormalizers) {
      this.typeNormalizers = options.typeNormalizers
    }
  }

  /**
   * returns type object for the type.
   *
   * @param name tyep name.
   */
  getTypeObject(name: string): TypeObject {
    return {
      type: this.getType(name),
      checker: this.getCheckerFor(name),
      normalizer: this.getNormalizerFor(name),
    }
  }

  /**
   * find type by name.
   *
   * @param name type name.
   */
  getType(name: string): PretsType {
    const type = this.types.find((t) => t.name === name)

    if (!type) {
      throw new Error(`[prets] type "${name}" is not found.`)
    }

    return type
  }

  /**
   * find type checker for the type.
   *
   * @param name type name.
   */
  getCheckerFor(name: string): PretsTypeChecker {
    const checker = this.typeCheckers.find((t) => t.checkerOf === name)

    if (!checker) {
      throw new Error(`[prets] type-checker "${name}" is not found.`)
    }

    return checker
  }

  /**
   * find normalizer for the type.
   *
   * @param name type name.
   */
  getNormalizerFor(name: string): PretsTypeNormalizer {
    const normalizer = this.typeNormalizers.find((t) => t.normalizerOf === name)

    if (!normalizer) {
      throw new Error(`[prets] type-normalizer "${name}" is not found.`)
    }

    return normalizer
  }

  /**
   * register a prets type.
   *
   * @param type prets type.
   */
  registerType(type: PretsType): void {
    this.types.push(type)
  }

  /**
   * register a prets type checker.
   *
   * @param checker prets type checker.
   */
  registerTypeChecker(checker: PretsTypeChecker): void {
    this.typeCheckers.push(checker)
  }

  /**
   * register a prets type normalizer.
   *
   * @param normalizer prets type normalizer.
   */
  registerTypeNomralizer(normalizer: PretsTypeNormalizer): void {
    this.typeNormalizers.push(normalizer)
  }
}
