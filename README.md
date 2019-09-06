# Pose estimation
API para obtenção dos pixels das articulações de uma pessoa presente em uma imagem.

Deploy: http://poseestimation.herokuapp.com

### API

|Rota                    |Descrição                                                         |body    |Resultado                          |
|------------------------|------------------------------------------------------------------|--------|-----------------------------------|
|GET `/header`           |Obter o cabeçalho dos dados                                       | --     | Array[String]                     |
|GET `/estimate?url=URL` |Obter as coordenadas das articulações encontradas na imagem da URL| --     |Array[Number] \|\| false<sup>1<sub>|
|POST `/estimate`        | //                                                               | `{ "base64": String}`   | //               |

1 - Erro ao carregar a imagem ou não foi possível identificar os pontos.

### Instruções para rodar localmente

1.  Clone o repositório ```$ https://github.com/macielbarbosa/pose-estimation.git```
2.  Entre no diretório: `$ cd pose-estimation`
3.  Instale as dependências: `$ npm install`
4.  Inicie o serviço através do comando `$ npm start`
