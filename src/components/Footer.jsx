import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index)=>(
            <a key={index} className="" target="_blank" rel="noreferrer" href={link.href}>
                {link.icon}
            </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;HamidZia. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
