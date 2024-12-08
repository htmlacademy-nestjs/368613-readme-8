const swaggerTransformer = {
  name: '@nestjs/swagger/plugin',
  options: {
    dtoFileNameSuffix: ['.dto.ts', '.entity.ts'],
    introspectComments: true
  }
};

module.exports = swaggerTransformer;
