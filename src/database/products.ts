import {
  ZERO1050,
  ZERO91050,
  AMINOFLOWER,
  BORO10,
  CALCIO27,
  KIFOLMAX,
  CALIBRE,
  COBMOL,
  CUPRATIL,
  FERTPOS,
  FOSFITO,
  GREENFOL,
  ORGANICS,
  STRIKE,
  TEKS,
  ZINFOL
} from '../images';
import { IProduct } from '../interfaces';

export const products: IProduct[] = [
  {
    id: 1,
    url: 'organics',
    image: ORGANICS,
    name: 'ORGANICS',
    description: [
      `O ORGANICS é um fertilizante Organo-Mineral obtido a partir da biofermentação de elementos essenciais para o desenvolvimento das plantas.`,

      `Esse produto reúne teores balanceados de matéria orgânica e nutrientes.`,

      `O uso racional desse poderoso produto estimula o sistema radicular das plantas, permitindo um melhor aproveitamento dos nutrientes presentes no solo. Isso é possível porque o ORGANICS forma quelatos com os nutrientes, facilitando sua absorção pelas raízes.`,

      `Além disso, o ORGANICS estimula o metabolismo da planta, proporcionando uma nutrição equilibrada e repleta de vantagens, como maior produtividade, desenvolvimento das raízes, folhas e flores, frutos de maior tamanho com coloração e brilho intensos, fortalecimento das defesas sanitárias e eficiência no combate ao estresse.`,

      `O ORGANICS ativa os microorganismos benéficos do solo, o que permite um melhor aproveitamento do potencial produtivo da planta.`
    ]
  },
  {
    id: 2,
    url: 'boro-10',
    image: BORO10,
    name: 'BORO 10%',
    description: [
      `O Kifol Boro 10% é um fertilizante foliar líquido elaborado para suprir as necessidades de boro em plantas de interesse econômico.`,

      `Além disso, esse micronutriente desempenha um papel fundamental na prevenção de rachaduras e deformações nos frutos. A deficiência de boro também pode se manifestar por meio de clorose ou necrose dos brotos.`
    ]
  },
  {
    id: 3,
    url: 'calcio-boro',
    image: KIFOLMAX,
    name: 'CALCIO-BORO',
    description: [
      `O KIFOL KI-FOLMAX CÁLCIO-BORO é um fertilizante líquido que contém dois elementos fundamentais para o desenvolvimento das plantas e frutos.`,

      `O cálcio contribui para o aumento da fecundação das flores, fixação dos botões florais e frutificação.`,

      `Além disso, é recomendado para prevenir o aparecimento de distúrbios fisiológicos causados pela carência de cálcio, como a podridão estilar (fundo preto) frequentemente observada em tomates e pimentões, falhas na granação em amendoim, soja, feijão, café e ervilha, bem como embonecamento e coração oco em batatas.`,

      `Já o boro é um nutriente indispensável. A deficiência de boro pode resultar em rachaduras profundas e deformação dos frutos. A carência de boro também pode se manifestar por meio de clorose ou necrose dos brotos.`
    ]
  },
  // {
  //   id: 4,
  //   url: 'calibre',
  //   image: CALIBRE,
  //   name: 'CALIBRE',
  //   description: [
  //     `Produto destinado ao uso agrícola com a finalidade de suprir a deficiência de Fósforo e Potássio.`,

  //     `Um produto desenvolvido para melhorar a formação, coloração, granulação e brilho dos frutos em plantas visando interesse econômico.`
  //   ]
  // },
  {
    id: 5,
    url: 'cobmol',
    image: COBMOL,
    name: 'COBMOL',
    description: [
      `O COBMOL é um fertilizante especialmente desenvolvido para corrigir as deficiências de molibdênio e cobalto em diversas culturas.`,

      `O molibdênio desempenha um papel crucial na assimilação de nitrogênio na forma de nitratos.`,

      `Além de suprir essas deficiências, o COBMOL estimula o metabolismo geral das plantas, aumentando a síntese de proteínas e proporcionando um resultado satisfatório no desenvolvimento e na frutificação.`,

      `O Cobmol também auxilia as plantas que têm dificuldade em desenvolver o sistema radicular, principalmente no aumento de radicelas.`
    ]
  },
  {
    id: 6,
    url: 'cupratil',
    image: CUPRATIL,
    name: 'CUPRATIL',
    description: [
      `O CUPRATIL é um fertilizante foliar líquido à base de Cobre.`,

      `O Cobre participa nos processos de respiração e fotossíntese, mantendo as plantas verdes e saudáveis.`,

      `O Cobre é um excelente ativador de enzimas e aminoácidos.`
    ]
  },
  {
    id: 7,
    url: 'zinfol',
    image: ZINFOL,
    name: 'ZINFOL',
    description: [
      `Zinfol, produto elaborado para suprir as necessidades de Zinco em plantas de interesse econômico, visando uma melhor formação da planta, dando maior resistência contra doenças.`
    ]
  },
  {
    id: 8,
    url: 'fosfito-40-20',
    image: FOSFITO,
    name: 'FOSFITO 40-20',
    description: [
      `O KIFOL FOSFITO é um fertilizante composto com características especiais, desenvolvido para suprir as deficiências de fósforo e potássio em plantas de diversas culturas por meio da aplicação foliar.`,

      `Este fertilizante possui um elevado grau de digestibilidade e velocidade de translocação nos tecidos das plantas.`,

      `Além disso, o fosfito é um excelente promotor das defesas naturais da planta e um indutor de fitoalexinas, auxiliando na prevenção de agentes patogênicos como fungos e bactérias. O fósforo está diretamente ligado ao desenvolvimento e produtividade das lavouras, enquanto o potássio é extremamente essencial na fase de enchimento de frutos e grãos. Além de auxiliar na coloração, brilho, sabor, tamanho e textura dos produtos.`
    ]
  },
  {
    id: 9,
    url: 'greenfol',
    image: GREENFOL,
    name: 'GREENFOL',
    description: [
      `O GREENFOL é um fertilizante foliar líquido, elaborado para suprir as necessidades de magnésio, uma vez que este nutriente tem um papel elementar tanto na formação como na vida útil, rejuvenescendo as plantas.`,

      `Sua fórmula concentrada, contém mecanismos que incorporam adjuvantes para maximizar a e?ciência agronômica, assegurando a qualidade física do produto.`
    ]
  },
  {
    id: 10,
    url: 'amino-flower',
    image: AMINOFLOWER,
    name: 'AMINO FLOWER',
    description: [
      `O KIFOL AMINO FLOWER é um fertilizante foliar líquido facilmente absorvido pelas folhas, caules e raízes das plantas.`,

      `Sua formulação rica em zinco, boro, molibdênio, cobalto, manganês e ferro proporciona uma nutrição equilibrada, que auxilia na melhoria da produtividade e qualidade da lavoura.`,

      `Com seu alto conteúdo nutricional e o uso adequado, especialmente em períodos e doses recomendadas, o fertilizante contribui para a recuperação das plantas em condições de estresse.`,

      `Além disso, o KIFOL AMINO FLOWER melhora o aspecto visual dos frutos, conferindo-lhes brilho e coloração, e também atua como estimulador de brotação, promovendo um aumento na produção. O uso consciente desse produto resulta no aumento do tamanho e na uniformidade dos frutos.`
    ]
  },
  {
    id: 11,
    url: 'teks',
    image: TEKS,
    name: 'TEKS',
    description: [
      `O TEKS é um fertilizante líquido concentrado com uma formulação balanceada de Fósforo, Potássio e Enxofre.`,

      `Este produto foi desenvolvido com o mais alto rigor tecnológico em termos de fertilizantes foliares. Sua fórmula, minuciosamente estudada, proporciona resultados satisfatórios em diversas culturas. O TEKS é facilmente absorvido pelas plantas, estimulando o metabolismo vegetal e promovendo o aumento radicular, o que resulta em uma maior absorção e aproveitamento dos nutrientes, inclusive aqueles aplicados no solo. Como resultado do uso racional do TEKS, as culturas apresentam um desenvolvimento vegetativo que resulta em maior produtividade e melhoria na qualidade dos frutos, incluindo coloração, brilho e peso. O enxofre é fundamental para a composição de proteínas e a nodulação de leguminosas. O potássio é um nutriente indispensável para a formação e maturação dos frutos, e o fósforo desempenha um papel importante em todas as fases da planta.`,

      `O TEKS não contém nitrogênio (N), o que torna este fertilizante adequado mesmo em épocas de chuvas constantes, sem o risco de amolecer as plantas e os frutos.`,

      `O TEKS é recomendado para plantas de todas as idades e deve ser usado desde o início até o final da safra.`
    ]
  },
  {
    id: 12,
    url: 'strike',
    image: STRIKE,
    name: 'STRIKE',
    description: [
      `O STRIKE é um fertilizante foliar com uma formulação balanceada, desenvolvida para suprir as deficiências de micronutrientes nas plantas.`,

      `O STRIKE promove o equilíbrio necessário, o que estimula o metabolismo das plantas e melhora a síntese de proteínas.`,

      `Como resultado, observa-se um melhor desenvolvimento, frutificação, aumento da produtividade e qualidade dos frutos.`,

      `Além dos micronutrientes, o STRIKE também contém potássio em sua formulação, que estimula a absorção dos micro e macronutrientes, além de contribuir para a granação e formação dos frutos.`
    ]
  },
  {
    id: 13,
    url: 'ki-folmax-00-10-50',
    image: ZERO1050,
    name: 'KI-FOLMAX 00-10-50',
    description: [
      `O fertilizante 00-10-50 possui alta concentração de potássio. É um fertilizante de fácil manuseio por ser totalmente solúvel, o que torna a aplicação mais eficiente, poupando tempo nas pulverizações.`,

      `É recomendado em plantas durante a fase de frutificação, pois a maioria das culturas necessita de mais potássio nesse período.`,

      `A aplicação do fertilizante KI-FOLMAX 00-10-50 na fase de frutificação proporciona uma melhor granação dos cereais e um completo desenvolvimento e enchimento dos frutos em outras culturas, como morango, tomate, uva e batata, resultando no aumento da produtividade.`,

      `Esse nutriente auxilia na coloração, resistência da polpa e casca, teor de açúcar e acidez dos frutos de maneira geral.`,

      `Além disso, o KI-FOLMAX 00-10-50 contém em sua formulação o fósforo, um excelente nutriente essencial para as plantas nas fases pré e pós-floração`
    ]
  },
  {
    id: 14,
    url: 'kifol-micros',
    image: FERTPOS,
    name: 'KIFOL MICROS',
    description: [
      `O KIFOL MICROS é um fertilizante foliar com uma formulação balanceada.`,

      `Além de corrigir as deficiências minerais, quando aplicado nas dosagens e épocas recomendadas, ele estimula o metabolismo das plantas, o que produz um efeito que chamamos de ARRANQUE.`,

      `O resultado é uma melhora na frutificação, produtividade e qualidade dos frutos`
    ]
  },
  {
    id: 15,
    url: 'ki-folmax-09-50-10',
    image: ZERO91050,
    name: 'KI-FOLMAX 09-50-10',
    description: [
      'O fertilizante 09-50-10 possui alta concentração de fósforo, um nutriente importante para a fase de pré e pós florada nas plantas.'
    ]
  },
  {
    id: 16,
    url: 'calcio-27',
    image: CALCIO27,
    name: 'CALCIO 27%',
    description: [
      `O KIFOL CÁLCIO 27% é um fertilizante foliar indicado para a prevenção e correção de deficiências nutricionais de Cálcio.`,

      `Produto 100% solúvel em água. O KIFOL CÁLCIO 27% é um produto farelado com uma alta concentração de Cálcio, o que proporciona uma melhor absorção e aproveitamento do nutriente pelas plantas.`,

      `O KIFOL CÁLCIO 27%, quando aplicado nas dosagens e épocas recomendadas auxilia na fecundação de flores, fixação dos botões florais e frutificação.`
    ]
  }
];
