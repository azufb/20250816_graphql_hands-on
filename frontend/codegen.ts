import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/features/**/*.graphql",
  generates: {
    "src/gql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        verbatimModuleSyntax: false,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
