#!/bin/sh
set -eu

: "${API_URL:?La variable de entorno API_URL es obligatoria}"

cat > /usr/share/nginx/html/config.js <<EOF
window.__APP_CONFIG__ = {
    API_URL: "${API_URL}"
};
EOF