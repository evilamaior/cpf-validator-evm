# Validador de CPF

**A biblioteca é utilizada para validar números de CPF** A atual versão não aceita letras, caracteres especiais, mais ou menos que 11 dígitos para verificar se o número do CPF é válido ou não.

## Como instalar

Para instalar, digite o comando a seguir no terminal.
> $  npm cpf-validator-evm

## Como utilizar

Para utilizar a biblioteca, digite o comando a seguir no terminal.
> const validator = require('cpf-validator-evm');
> console.log(validator.cpfValidator('31661732852'))
> // returns "true"

## Roadmap

Versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação para gerar números de CPF válidos.

Versão 0.0.1
- funcionalidades: verifica se número de CPF é válido. Não aceita letras ou caracteres especiais. Não aceita dígitos iguais. Também não aceita CPF com mais ou menos que 11 dígitos.