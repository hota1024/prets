import { Project } from 'ts-morph'
import { parse } from './argsParser/parseArgs'
import { tokenize } from './argsParser/tokenize'
import { getPretsTypeCheckers } from './inspectors/getPretsTypeCheckers'
import { getPretsTypeNormalizers } from './inspectors/getPretsTypeNormalizers'
import { getPretsTypes } from './inspectors/getPretsTypes'
import { getTagByName } from './inspectors/getTag'
import { TypeManager } from './TypeManager'

const project = new Project({
  tsConfigFilePath: 'tests/test-project/tsconfig.json',
})
const file = project.getSourceFile('tests/test-project/src/index.ts')

if (file) {
  const typeManager = new TypeManager({
    types: getPretsTypes(file),
    typeCheckers: getPretsTypeCheckers(file),
    typeNormalizers: getPretsTypeNormalizers(file),
  })

  const interfaces = file.getInterfaces()
  for (const inter of interfaces) {
    const methods = inter.getMethods()

    for (const method of methods) {
      if (getTagByName('pretsGenerated', method)) {
        method.remove()
        continue
      }

      const argsString = getTagByName('pretsFn', method)
      if (argsString) {
        const { args } = parse(tokenize(argsString))

        for (const arg of args) {
          const type = typeManager.getTypeObject(arg.type.ident)

          console.log(type)
        }

        inter.addMethod({
          name: method.getName(),
          returnType: method.getReturnType().getText(),
          docs: ['@pretsGenerated'],
        })
      }
    }
  }

  file.save()
}
