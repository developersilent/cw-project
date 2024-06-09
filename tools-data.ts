import crowbarImage from "./public/melee/img-weapons-crowbar.png";
import macheteImage from "./public/melee/img-weapons-machete.png";
import pickaxeImage from "./public/melee/img-weapons-pickaxe.png";
import sickleImage from "./public/melee/img-weapons-sickle.png";
import katanaImage from "./public/melee/katana.png";

//

import c4Image from "./public/throwable/img-weapons-c4.png";
import fragGrenadeImage from "./public/throwable/img-weapons-frag_grenade.png";
import decoyGrenade from "./public/throwable/img-weapons-decoy_grenade.png";
import molotovCocktailImage from "./public/throwable/img-weapons-molotov_cocktail.png";
import smokeGrenadeImage from "./public/throwable/img-weapons-smoke_grenade.png";
import stunGrenadeImage from "./public/throwable/img-weapons-stun_grenade.png";
import stickyBombImage from "./public/throwable/img-weapons-sticky_bomb.png";

export const toolsData = {
  melee: [
    {
      id: 1,
      image: crowbarImage,
      title: "Crowbar",
      description:
        "A crowbar is a tool consisting of a metal bar with a single curved end and flattened points, often with a small fissure on one or both ends for removing nails. Crowbars are commonly used to open nailed wooden crates, remove nails, or pry apart two objects. Crowbars can be used as any other blunt weapon, but they are not as effective as a dedicated weapon.",
      price: 50.99,
    },
    {
      id: 2,
      image: macheteImage,
      title: "Machete",
      description:
        "A machete is a broad blade used either as an implement like an axe, or in combat like a short sword. The blade is typically 32.5 to 45 centimeters long and usually under 3 millimeters thick. In the Spanish language, the word is a diminutive form of the word macho, which was used to refer to sledgehammers. In the English language, an equivalent term is matchet, though it is less commonly used.",
      price: 100.0,
    },
    {
      id: 3,
      image: pickaxeImage,
      title: "Pickaxe",
      description:
        "A pickaxe is a tool with a hard head attached perpendicular to the handle. The head is usually made of metal, and the handle is most commonly wood, metal or fiberglass. The head is a spike ending in a sharp point, may curve slightly, and often has a counter-weight to improve ease of use. The stronger the spike, the more effective the pickaxe is at breaking up rock. A pickaxe can be used as a weapon, but it is not as effective as a dedicated weapon.",
      price: 70.99,
    },
    {
      id: 4,
      image: sickleImage,
      title: "Sickle",
      description:
        "A sickle is a hand-held agricultural tool with a variously curved blade typically used for harvesting grain crops or cutting succulent forage chiefly for feeding livestock (either freshly cut or dried as hay). The sickle is often used as a weapon in some cultures.",
      price: 400.21,
    },
    {
      id: 5,
      image: katanaImage,
      title: "Katana",
      description:
        "The katana is a type of Japanese sword, also commonly referred to as a samurai sword. The katana is characterized by its distinctive appearance: a curved, slender, single-edged blade with a circular or squared guard and long grip to accommodate two hands. It has historically been associated with the samurai of feudal Japan, and has become renowned for its sharpness and cutting ability.",
      price: 90,
    },
  ],
  throwable: [
    {
      id: 1,
      image: c4Image,
      title: "C4",
      description:
        "C-4 or Composition C-4 is a common variety of the plastic explosive family known as Composition C. A similar British plastic explosive, based on RDX but with different plasticizer than Composition C-4, is known as PE-4 (Plastic Explosive No. 4). C-4 is composed of explosives, plastic binder, plasticizer to make it malleable, and usually a marker or odorizing taggant chemical.",
      price: 500.99,
    },
    {
      id: 2,
      image: decoyGrenade,
      title: "Decoy Grenade",
      description:
        "A decoy grenade is a non-lethal explosive device that is designed to confuse the enemy. It is used to distract the enemy and draw their attention away from the real threat. Decoy grenades are often used in military operations to create confusion and disorient the enemy. They are also used in law enforcement operations to distract suspects and create an opportunity for the police to move in and make an arrest.",
      price: 50.99,
    },
    {
      id: 3,
      image: fragGrenadeImage,
      title: "Frag Grenade",
      description:
        "A fragmentation grenade (commonly known as a frag grenade) is an anti-personnel weapon that is designed to disperse shrapnel upon exploding. The body of the grenade is made of a hard metal casing that is filled with a high explosive material. When the grenade is detonated, the explosive force causes the casing to shatter into small, high-velocity fragments that are propelled outward in all directions. These fragments can cause serious injury or death",
      price: 100.99,
    },
    {
      id: 4,
      image: molotovCocktailImage,
      title: "Molotov Cocktail",
      description:
        "A Molotov Cocktail is an improvised explosive device made from a glass bottle filled with a flammable liquid, typically gasoline or alcohol, and a cloth wick. When lit and thrown, it breaks on impact, igniting the liquid and causing a fire.",
      price: 50.99,
    },
    {
      id: 5,
      image: smokeGrenadeImage,
      title: "Smoke Grenade",
      description:
        "A smoke grenade is a canister-type grenade used as a signaling device, target or landing zone marking device, or as a screening device for unit movements. Smoke grenades emit a dense cloud of smoke that can obscure vision and provide cover for troops. They are commonly used in military operations, law enforcement operations, and training exercises.",
      price: 50.99,
    },
    {
      id: 6,
      image: stunGrenadeImage,
      title: "Stun Grenade",
      description:
        "A stun grenade, also known as a flashbang grenade, is a non-lethal explosive device that is designed to disorient and incapacitate the enemy. It is used to create a blinding flash of light and a loud noise that can temporarily blind, deafen, and disorient the enemy. Stun grenades are often used in military operations, law enforcement operations, and counter",
      price: 50.99,
    },
    {
      id: 7,
      image: stickyBombImage,
      title: "Sticky Bomb",
      description:
        "A sticky bomb is an explosive device that is designed to stick to a target before detonating. It is typically used in military operations to destroy enemy vehicles, equipment, or fortifications. Sticky bombs are also used in law enforcement operations to disable vehicles or breach doors. The bomb is attached to the target using a sticky adhesive, such as glue or tape, and is detonated remotely by the operator.",
      price: 50.99,
    },
  ],
};
