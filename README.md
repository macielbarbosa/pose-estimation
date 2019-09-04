# Pose estimation
API para obtenção dos pixels das articulações de uma pessoa presente em uma imagem.

Deploy: http://poseestimation.herokuapp.com

### API

| Rota                | Descrição                                                          | Resultado |
|---------------------|--------------------------------------------------------------------|-----------|
| `/header`           | Obter o cabeçalho dos dados                                        | Array[String] |
| `/estimate?url=URL` | Obter as coordenadas das articulações encontradas na imagem da URL | Array[Number] \|\| false<sup>1<sub> |
  
1 - A imagem não foi encontrada ou não foi possível identificar os pontos na imagem.

### Instruções para rodar localmente

1.  Clone o repositório ```$ https://github.com/macielbarbosa/pose-estimation.git```
2.  Entre no diretório: `$ cd pose-estimation`
3.  Instale as dependências: `$ npm install`
4.  Inicie o serviço através do comando `$ npm start`
