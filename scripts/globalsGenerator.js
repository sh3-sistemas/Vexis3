import { join } from "path";
import fs from "fs";

// Caminho base para a pasta components
const baseDir = "/home/barbara/Documentos/Work/SH3/Vexis3/src/components"; // Substitua pelo caminho absoluto se necessário

const generateGlobalsFile = (dir, componentDeclarations) => {
  const typesDir = join(dir, "types");
  const globalsFilePath = join(typesDir, "globals.ts");

  // Criação da pasta types se não existir
  if (!fs.existsSync(typesDir)) {
    console.log(`Criando a pasta: ${typesDir}`);
    fs.mkdirSync(typesDir);
  }

  // Conteúdo do arquivo globals.ts
  const declarations = componentDeclarations
    .map(
      ({ componentName, propsType, slotsType, emitsType }) =>
        `    ${componentName}: DefineComponent<${propsType}, ${slotsType}, ${emitsType}>;`,
    )
    .join("\n");

  const content = `import type { DefineComponent } from "vue";

declare module "vue" {
  export interface GlobalComponents {
${declarations}
  }
}`;

  // Criação do arquivo globals.ts
  console.log(`Gerando o arquivo: ${globalsFilePath}`);
  fs.writeFileSync(globalsFilePath, content, "utf8");
};

const readVueFiles = (dir) => {
  const componentDeclarations = [];
  console.log(`Processando o diretório: ${dir}`);

  // Verificar se o diretório existe
  if (!fs.existsSync(dir)) {
    console.error(`O diretório ${dir} não existe.`);
    return;
  }

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursão para subdiretórios
      readVueFiles(fullPath);
    } else if (file.endsWith(".vue")) {
      // Processar arquivos .vue
      const baseName = file.replace(".vue", "");
      const componentName = baseName;
      const propsType = `${baseName.split("Sh3").join("")}Props`;
      const slotsType = `${baseName.split("Sh3").join("")}Slots`;
      const emitsType = `${baseName.split("Sh3").join("")}Emits`;

      console.log(`Componente encontrado: ${componentName}`);
      componentDeclarations.push({
        componentName,
        propsType,
        slotsType,
        emitsType,
      });
    }
  });

  // Criar o arquivo globals.ts se houver componentes encontrados
  if (componentDeclarations.length > 0) {
    generateGlobalsFile(dir, componentDeclarations);
  }
};

// Iniciar leitura dos arquivos .vue a partir do baseDir
readVueFiles(baseDir);

console.log("Processo concluído com sucesso!");
