import * as YAML from "js-yaml";
import { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function SwaggerDocs() {
  const [swaggerSpec, setSwaggerSpec] = useState(null);

  useEffect(() => {
    const fetchSwaggerSpec = async () => {
      try {
        const response = await fetch("/docs/swagger.yaml");
        const yamlData = await response.text();
        const jsonData = YAML.load(yamlData);
        setSwaggerSpec(jsonData as any);
      } catch (error) {
        console.error(
          "Erreur lors du chargement de la spécification Swagger:",
          error
        );
      }
    };

    fetchSwaggerSpec();
  }, []);

  return swaggerSpec ? <SwaggerUI spec={swaggerSpec} /> : null;
}

export default SwaggerDocs;
