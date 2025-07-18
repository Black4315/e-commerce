import os

input_dir = './public/assets/icons/'      # مسار SVG
output_dir = './public/assets/icons/tsx'     # مسار TSX الناتج

os.makedirs(output_dir, exist_ok=True)

def svg_to_tsx_component(name: str, svg_content: str) -> str:
    component_name = name.replace(" ", "").replace("-", "").replace(".svg", "")
    component_name = component_name[0].upper() + component_name[1:]

    # احرص على أن svg تبدأ على السطر وحدها
    svg_content = svg_content.strip()
    if '<svg' in svg_content:
        svg_content = svg_content.replace('<svg', '<svg {...props}', 1)

    return f"""import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const {component_name}Icon = (props: Props) => (
  {svg_content}
);

export default {component_name}Icon;
"""

for filename in os.listdir(input_dir):
    if filename.endswith('.svg'):
        path = os.path.join(input_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            svg = f.read()

        component_tsx = svg_to_tsx_component(filename, svg)
        out_filename = filename.replace('.svg', '').replace(" ", "").replace("-", "") + '.tsx'
        out_path = os.path.join(output_dir, out_filename)

        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(component_tsx)

        print(f'✅ Created: {out_filename}')
