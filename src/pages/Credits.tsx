import Layout from "@/components/Layout";

const sources = [
  {
    text: 'AKC Staff. (2021, April 27). Responsible breeding - the evolution of breeds.',
    italicTitle: 'American Kennel Club.',
    url: 'https://www.akc.org/expert-advice/dog-breeding/responsible-breeding-the-evolution-of-breeds/',
  },
  {
    text: 'American Museum of Natural History. (n.d.). DNA: Comparing Humans and Chimps.',
    italicTitle: 'American Museum of Natural History.',
    url: 'https://www.amnh.org/exhibitions/permanent/human-origins/understanding-our-past/dna-comparing-humans-and-chimps',
  },
  {
    text: 'Auwaerter, P. G. (2005, August 23). Staphylococcus aureus: Johns Hopkins Abx Guide.',
    italicTitle: 'Staphylococcus aureus | Johns Hopkins ABX Guide.',
    url: 'https://www.hopkinsguides.com/hopkins/view/Johns_Hopkins_ABX_Guide/540518/all/Staphylococcus_aureus',
  },
  {
    text: 'Becoming Human. (2023, June 21). Our Ancestors-Hominin Fossil Record.',
    italicTitle: null,
    url: 'https://becominghuman.org/pathways-to-discovery/the-fossil-record/our-ancestors-hominin-fossil-record/',
  },
  {
    text: 'Berkeley University of California. (n.d.). Modes of speciation.',
    italicTitle: 'Understanding Evolution.',
    url: 'https://evolution.berkeley.edu/modes-of-speciation/sympatric-speciation/',
  },
  {
    text: 'Climate Adaptation Science Centers. (2016, January 21). Evolutionary clock ticks for snowshoe hares facing climate change.',
    italicTitle: 'USGS.',
    url: 'https://www.usgs.gov/news/evolutionary-clock-ticks-snowshoe-hares-facing-climate-change',
  },
  {
    text: 'Carrière, Y., Crowder, D. W., & Tabashnik, B. E. (2010). Evolutionary ecology of insect adaptation to BT Crops.',
    italicTitle: 'Evolutionary Applications, 3(5–6),',
    suffix: ' 561–573.',
    url: 'https://doi.org/10.1111/j.1752-4571.2010.00129.x',
  },
  {
    text: 'CBD. (2010, April 6). What is taxonomy?.',
    italicTitle: 'Convention on Biological Diversity.',
    url: 'https://www.cbd.int/gti/taxonomy.shtml',
  },
  {
    text: 'CDC. (2025, June 26). Methicillin-resistant Staphylococcus aureus (MRSA) basics.',
    italicTitle: 'Centers for Disease Control and Prevention.',
    url: 'https://www.cdc.gov/mrsa/about/index.html',
  },
  {
    text: 'Fonseca, E. M., Pelletier, T. A., Decker, S. K., Parsons, D. J., & Carstens, B. C. (2023). Pleistocene glaciations caused the latitudinal gradient of within-species genetic diversity.',
    italicTitle: 'Evolution Letters, 7(5),',
    suffix: ' 331–338.',
    url: 'https://doi.org/10.1093/evlett/qrad030',
  },
  {
    text: 'Hardy, M. (n.d.). 3.1 Darwin and natural selection.',
    italicTitle: 'Salt Lake Community College.',
    url: 'https://slcc.pressbooks.pub/collegebiology1/chapter/evolution/',
  },
  {
    text: 'Michigan State University. (n.d.). How pesticide resistance develops.',
    italicTitle: 'Grapes.',
    url: 'https://www.canr.msu.edu/grapes/integrated_pest_management/how-pesticide-resistance-develops',
  },
  {
    text: 'MRSA Action UK. (n.d.). MRSA action UK: History of MRSA.',
    italicTitle: 'MRSA Action UK | History of MRSA.',
    url: 'http://mrsaactionuk.net/pottedhistoryMRSA.html',
  },
  {
    text: 'Jeanson, N. T. (2014, August 29).',
    italicTitle: 'The Institute for Creation Research.',
    suffix: ' Darwin vs. Genetics: Surprises and Snags in the Science of Common Ancestry.',
    url: 'https://www.icr.org/article/darwin-vs-genetics-surprises-snags/',
  },
  {
    text: 'PBS WHYY. (2014, October 27). Arctic bears ~ how grizzlies evolved into polar bears.',
    italicTitle: 'PBS.',
    url: 'https://www.pbs.org/wnet/nature/arctic-bears-how-grizzlies-evolved-into-polar-bears/777/',
  },
  {
    text: 'Rhodes, C. (2025, September 1). How are plants and animals responding to climate change?.',
    italicTitle: 'Earth.Org.',
    url: 'https://earth.org/how-are-plants-and-animals-responding-to-climate-change/',
  },
  {
    text: 'Tomkins, J. P. (2024, April 30). Galápagos Finches: A Case Study in Evolution or Adaptive Engineering?.',
    italicTitle: 'Institute for Creation Research.',
    url: 'https://www.icr.org/content/gal%C3%A1pagos-finches-case-study-evolution-or-adaptive-engineering',
  },
];

const Credits = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Credits & Attribution</h1>
        <div className="bg-card rounded-lg p-8 border border-border space-y-6">
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Images</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>
                Photos from{" "}
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="bio-link">
                  Unsplash
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Technologies</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>Built with React, TypeScript, and Tailwind CSS</li>
              <li>Icons by Lucide</li>
              <li>UI components by shadcn/ui</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Sources</h2>
            <ul className="text-muted-foreground space-y-3 text-sm leading-relaxed">
              {sources.map((s, i) => (
                <li key={i} className="pl-8 -indent-8">
                  {s.text}{" "}
                  {s.italicTitle && <em>{s.italicTitle}</em>}
                  {s.suffix && s.suffix}{" "}
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="bio-link break-all">
                    {s.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Special Thanks</h2>
            <p className="text-muted-foreground">
              Add your acknowledgments here. Edit{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">src/pages/Credits.tsx</code>{" "}
              to customize.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Credits;
