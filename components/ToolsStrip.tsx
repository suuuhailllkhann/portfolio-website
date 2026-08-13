import { FaAws, FaDatabase } from "react-icons/fa";
import { SiNumpy, SiPandas, SiPostgresql, SiPython, SiScikitlearn } from "react-icons/si";

const tools = [
  { name: "Python", Icon: SiPython }, { name: "SQL", Icon: FaDatabase },
  { name: "pandas", Icon: SiPandas }, { name: "NumPy", Icon: SiNumpy },
  { name: "scikit-learn", Icon: SiScikitlearn }, { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "AWS", Icon: FaAws },
] as const;

export function ToolsStrip() {
  return <section className="tools-strip" aria-labelledby="tools-title"><div className="container tools-inner"><h2 id="tools-title">Tools &amp; Technologies</h2><ul>{tools.map(({ name, Icon }) => <li key={name}><Icon aria-hidden="true"/><strong>{name}</strong></li>)}</ul></div></section>;
}
