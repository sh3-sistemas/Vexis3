type TagVariation = {
    tagColor: string
    tagLabel: string
}

const pessoal = <TagVariation>{
    tagColor: 'bg-pessoal-500',
    tagLabel: 'departamento pessoal'
}
const contabil = <TagVariation>{
    tagColor: 'bg-contabil-500',
    tagLabel: 'contabilidade'
}
const tesoura = <TagVariation>{
    tagColor: 'bg-tesoura-500',
    tagLabel: 'tesouraria'
}
const controle = <TagVariation>{
    tagColor: 'bg-controle-500',
    tagLabel: 'controle interno'
}
const compras = <TagVariation>{
    tagColor: 'bg-compras-500',
    tagLabel: 'compras'
}
const patrimon = <TagVariation>{
    tagColor: 'bg-patrimon-500',
    tagLabel: 'patrimônio'
}
const frota = <TagVariation>{
    tagColor: 'bg-frota-500',
    tagLabel: 'frota'
}
const orcamento = <TagVariation>{
    tagColor: 'bg-orcamento-500',
    tagLabel: 'orçamento'
}
const almoxa = <TagVariation>{
    tagColor: 'bg-almoxa-500',
    tagLabel: 'almoxarifado'
}
const protoc = <TagVariation>{
    tagColor: 'bg-protoc-500',
    tagLabel: 'protocolo'
}
const diarias = <TagVariation>{
    tagColor: 'bg-diarias-500',
    tagLabel: 'diárias'
}
const reqint = <TagVariation>{
    tagColor: 'bg-reqint-500',
    tagLabel: 'requisição interna'
}

export const variations = <Record<string, TagVariation>>{
    "pessoal": pessoal,
    "contabil": contabil,
    "tesoura": tesoura,
    "controle": controle,
    "compras": compras,
    "patrimon": patrimon,
    "frota": frota,
    "orcamento": orcamento,
    "almoxa": almoxa,
    "protoc": protoc,
    "diarias": diarias,
    "reqint": reqint,
}