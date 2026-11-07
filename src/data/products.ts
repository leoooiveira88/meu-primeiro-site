// Dados das canetas do site.
// Ficam num arquivo separado porque são usados em mais de uma página:
//   - o catálogo (src/pages/segunda-pagina.astro) mostra todas em cards;
//   - a página de detalhes (src/pages/produto/[slug].astro) mostra uma de cada vez.
// Para adicionar ou mudar uma caneta, edite só esta lista: as duas páginas se atualizam.

export interface Spec {
	label: string;
	value: string;
}

export interface Product {
	/** Parte final do endereço da página de detalhes: /produto/<slug> */
	slug: string;
	code: string;
	title: string;
	/** Texto curto, usado no card do catálogo */
	description: string;
	/** Texto mais longo, usado na página de detalhes */
	story: string;
	material: string;
	/** Duas especificações rápidas, mostradas no card e na página de detalhes */
	specs: Spec[];
	/** Código da foto no Unsplash (a parte depois de "photo-" no endereço) */
	photoId: string;
	imageAlt: string;
}

// Monta o endereço de uma foto gratuita do Unsplash (unsplash.com), já recortada no tamanho pedido.
export const photoUrl = (photoId: string, width = 800, height = 600) =>
	`https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&auto=format&q=80`;

export const products: Product[] = [
	{
		slug: "precision-one",
		code: "AT-01",
		title: "Precision One",
		description: "A caneta que deu origem à linha. Corpo monobloco em alumínio e fluxo híbrido para um traço contínuo.",
		story: "A Precision One é o ponto de partida de tudo o que a Artools faz. Um único bloco de alumínio é usinado até virar corpo, sem emendas e sem folgas. Por dentro, o sistema de fluxo híbrido mantém a tinta chegando à ponta no ritmo exato do seu pensamento.",
		material: "Alumínio aeroespacial 6061-T6",
		specs: [
			{ label: "Ponta", value: "0,3 mm" },
			{ label: "Peso", value: "14 g" },
		],
		photoId: "1587303988571-c5563c0bceab",
		imageAlt: "Caneta de clique prateada sobre papel branco",
	},
	{
		slug: "precision-mini",
		code: "AT-02",
		title: "Precision Mini",
		description: "Todo o equilíbrio da Precision One em um tamanho que cabe no bolso da camisa.",
		story: "Reduzimos o corpo sem abrir mão do equilíbrio. A Precision Mini tem o centro de gravidade recalculado para o novo tamanho, então continua confortável em textos longos, mesmo sendo pequena o bastante para andar no bolso.",
		material: "Alumínio aeroespacial 6061-T6",
		specs: [
			{ label: "Ponta", value: "0,3 mm" },
			{ label: "Peso", value: "10 g" },
		],
		photoId: "1600531597946-f9b1d7b0f486",
		imageAlt: "Caneta de clique prateada e azul",
	},
	{
		slug: "signature-noir",
		code: "AT-03",
		title: "Signature Noir",
		description: "Acabamento preto fosco anodizado, feita para assinaturas que precisam ser lembradas.",
		story: "A Signature Noir recebe uma anodização preta fosca que não marca com digitais e não reflete a luz da sala. A ponta de 0,5 mm deixa um traço mais encorpado, pensado para assinaturas firmes e anotações de destaque.",
		material: "Alumínio anodizado preto fosco",
		specs: [
			{ label: "Ponta", value: "0,5 mm" },
			{ label: "Peso", value: "16 g" },
		],
		photoId: "1546493918-8bcb44f37c8e",
		imageAlt: "Caneta de clique preta",
	},
	{
		slug: "signature-titanium",
		code: "AT-04",
		title: "Signature Titanium",
		description: "Corpo em titânio grau 5, mais resistente e ainda mais leve. Edição numerada.",
		story: "O titânio grau 5 é o mesmo usado em próteses e na indústria aeroespacial. Na Signature Titanium ele forma um corpo praticamente indestrutível e mais leve que o aço. Cada unidade sai da fábrica com seu número gravado a laser.",
		material: "Titânio grau 5",
		specs: [
			{ label: "Ponta", value: "0,5 mm" },
			{ label: "Peso", value: "12 g" },
		],
		photoId: "1473186505569-9c61870c11f9",
		imageAlt: "Caneta-tinteiro preta e prateada",
	},
	{
		slug: "fluxo-tinteiro",
		code: "AT-05",
		title: "Fluxo Tinteiro",
		description: "Caneta-tinteiro com pena de aço polido e conversor para tinta em frasco.",
		story: "A Fluxo Tinteiro leva a engenharia da Artools para a escrita tradicional. A pena de aço polido é ajustada à mão, e o conversor permite usar qualquer tinta em frasco. O traço varia com a pressão, do fino ao encorpado.",
		material: "Alumínio e aço inoxidável polido",
		specs: [
			{ label: "Pena", value: "Média (M)" },
			{ label: "Peso", value: "22 g" },
		],
		photoId: "1517664121940-f819957bb072",
		imageAlt: "Caneta-tinteiro pingando tinta",
	},
	{
		slug: "atelier-brass",
		code: "AT-06",
		title: "Atelier Brass",
		description: "Latão maciço que ganha pátina com o uso. Cada caneta envelhece de um jeito único.",
		story: "O latão maciço da Atelier Brass não recebe verniz. Com o tempo e o toque das mãos, ele escurece e ganha uma pátina que conta a história de quem escreve com ela. Pesada e marcante, é a caneta para a mesa de trabalho.",
		material: "Latão maciço sem verniz",
		specs: [
			{ label: "Ponta", value: "0,4 mm" },
			{ label: "Peso", value: "34 g" },
		],
		photoId: "1518674660708-0e2c0473e68e",
		imageAlt: "Caneta-tinteiro dourada com pena gravada sobre superfície branca",
	},
	{
		slug: "studio-fineliner",
		code: "AT-07",
		title: "Studio Fineliner",
		description: "Ponta extrafina para desenho técnico, esboços e anotações em letra pequena.",
		story: "Com ponta de 0,1 mm e tinta pigmentada resistente à água, a Studio Fineliner foi feita para arquitetos, ilustradores e quem gosta de cadernos cheios de detalhes. O traço é constante do começo ao fim da carga.",
		material: "Alumínio aeroespacial 6061-T6",
		specs: [
			{ label: "Ponta", value: "0,1 mm" },
			{ label: "Peso", value: "13 g" },
		],
		photoId: "1580127645995-d43fe9598711",
		imageAlt: "Caneta vermelha sobre papel branco",
	},
	{
		slug: "voyager-compact",
		code: "AT-08",
		title: "Voyager Compact",
		description: "Tampa com rosca e trava, pronta para viagens. Não vaza em altitude.",
		story: "A Voyager Compact tem tampa com rosca dupla e uma trava de pressão que mantém a tinta no lugar mesmo na cabine de um avião. Compacta e robusta, foi testada em mudanças bruscas de temperatura e altitude.",
		material: "Alumínio com tampa em aço",
		specs: [
			{ label: "Ponta", value: "0,4 mm" },
			{ label: "Peso", value: "15 g" },
		],
		photoId: "1617177435596-1c9e30d6d608",
		imageAlt: "Caneta dourada e prateada sobre envelope marrom",
	},
	{
		slug: "archive-edition",
		code: "AT-09",
		title: "Archive Edition",
		description: "Releitura do primeiro protótipo da Artools, com estojo de madeira e certificado.",
		story: "A Archive Edition reproduz as linhas do primeiro protótipo desenhado em Zurique, agora com a tecnologia atual. Vem em um estojo de madeira de nogueira, acompanhada de um certificado de autenticidade assinado.",
		material: "Alumínio com detalhes em latão",
		specs: [
			{ label: "Ponta", value: "0,3 mm" },
			{ label: "Peso", value: "18 g" },
		],
		photoId: "1692399320866-9c417a4d7817",
		imageAlt: "Foto em preto e branco de uma caneta-tinteiro",
	},
];
