const getIndexFile = (additionalFiles = {}) => ({
  name: "index.tsx",
  id: Math.random(),
  ...additionalFiles,
});

export const fileSystem = [
  {
    name: "public",
    id: Math.random(),
    children: [{ name: "vite.svg", id: Math.random() }],
  },
  {
    name: "App",
    id: 1,
    children: [
      {
        name: "components",
        id: Math.random(),
        children: [
          {
            id: 2,
            name: "AnimateHeight",
            children: [getIndexFile()],
          },
          {
            id: 2,
            name: "FileExplorer",
            children: [
              getIndexFile(),
              {
                name: "FileNode",
                id: Math.random(),
                children: [getIndexFile()],
              },
            ],
          },
          {
            name: "icons",
            id: Math.random(),
            children: [
              {
                id: Math.random(),
                name: "ChevronRight",
                children: [getIndexFile()],
              },
            ],
          },
        ],
      },
      {
        name: "constants",
        id: Math.random(),
        children: [
          {
            name: "fileSystem.ts",
            id: Math.random(),
          },
        ],
      },
    ],
  },
  {
    name: ".gitignore",
    id: Math.random(),
  },
  {
    name: "tsconfig.json",
    id: Math.random(),
  },
  {
    name: "vite.config.ts",
    id: Math.random(),
  },
  {
    name: "yarn.lock",
    id: Math.random(),
  },
];
