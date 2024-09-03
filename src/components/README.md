# components

É onde deve ficar todos os componentes genéricos que serão usados dentro do projeto.

## Padrões de Desenvolvimento.

- Os componentes devem ser separados por pastas e devem ser nomeadas com `PascalCase`.

- Cada pasta deverá conter os seguintes arquivos `index.tsx`, `styles.ts`, `types.ts`, `index.test.tsx`.

- Pode conter sub componentes para auxiliar na componentização/criação do componente.

- Após a criação do componente deve importar e exportar ele no index.ts na raiz da pasta componentes, a ordem de importação deve ser alfabética.

## Exemplos de Arquivos

### `index.tsx` (Componente principal).

A estrutura esperada para criação dos componente segue abaixo:

```ts
import React from 'react';

import * as Styles from './styles.ts';
import * as Types from './types.ts';

const MyComponent: Component<Types.MyComponentProps> = ({
    testId = "default-id",
    prop1,
    prop2
}) => {

  ...

  return (
    <Styles.Container data-testid={testId}>
      <Styles.Text data-testid={`${testId}-text`}>{prop1}</Styles.Text>
      <Styles.Text data-testid={`${testId}-text`}>{prop2}</Styles.Text>
    </Styles.Container>
  );
};

export default MyComponent;
```

Recomendável utilizar o snippet `component-init` para criação da estrutura base.

### `styles.ts` (Estilo do componente).

É onde será criado os estilos utilizados pelo componente, por padrão os estilos devem ser criados com `styled-components`.

```ts
import styled from 'styled-components';

import * as Types from './types.ts';

export const Container = styled.div<Types.ContainerProps>`
  ...
`;
```

### `types.ts` (Tipagem do componente).

É onde será criado os tipos utilizados pelo componente.

```ts
export type MyComponentProps = {};

export type ContainerProps = {};
```

### `index.test.tsx` (Testes unitários).

É o arquivo de testes unitários do componente, deve conter testes de renderização, principais funcionalidades e variações de estilo.

```ts
import { render } from 'tests/CustomRender';

import MyComponent from '.';

describe('<MyComponent />', () => {
  it('Testing render.', () => {
    render(<MyComponent />);
  });
});
```

Deve se utilizar os métodos do CustomRender em vez do testingLibary.
