"use client";
import { useEffect, useState } from "react";
import { Instagram, Play, Music2, Facebook, Mail, Globe, MessageCircle, Gamepad2, Settings2, Plus, Trash2, X, Save, Link2, Image as ImageIcon, Video } from "lucide-react";

type LinkItem = { id: string; title: string; url: string; group: string; icon: string; subtitle?: string };
type Profile = { name: string; bio: string; avatar: string; background: string; backgroundType: "image" | "video"; links: LinkItem[] };
const defaults: Profile = {
 name:"Falintino", bio:"Creator • Gaming • Music\nSemua link resmi aku ada di sini ✦", avatar:"", background:"", backgroundType:"image",
 links:[
  {id:"store",title:"Top Up Free Fire",subtitle:"Transaksi otomatis di store resmi",url:"https://store.falintino.com",group:"LINK UTAMA",icon:"game"},
  {id:"artist",title:"Website Resmi Falintino",subtitle:"Musik, profil, dan karya terbaru",url:"https://falintino.com",group:"LINK UTAMA",icon:"globe"},
  {id:"tiktok",title:"TikTok Falintino",url:"https://www.tiktok.com/@falintino_",group:"MEDIA SOSIAL",icon:"tiktok"},
  {id:"instagram",title:"Instagram Falintino",url:"https://www.instagram.com/falintino07/",group:"MEDIA SOSIAL",icon:"instagram"}
 ]};
const iconMap: Record<string, React.ReactNode> = {instagram:<Instagram/>,youtube:<Play/>,tiktok:<Music2/>,facebook:<Facebook/>,mail:<Mail/>,globe:<Globe/>,whatsapp:<MessageCircle/>,game:<Gamepad2/>,community:<MessageCircle/>,discord:<Gamepad2/>,link:<Link2/>};
function BrandIcon({type}:{type:string}) { return <>{iconMap[type] || <Link2/>}</>; }
function loadProfile():Profile { try { const s=localStorage.getItem("falintino-link-profile"); if(!s)return defaults; const saved={...defaults,...JSON.parse(s)} as Profile; const generic=new Set(["https://www.youtube.com/","https://youtube.com/","https://wa.me/","https://whatsapp.com/","https://discord.com/","https://facebook.com/","mailto:hyperdarkking@gmail.com"]); saved.links=(saved.links||defaults.links).filter(link=>!generic.has(link.url)); return saved; } catch { return defaults; } }
export default function Home() {
 const [profile,setProfile]=useState<Profile>(defaults),[draft,setDraft]=useState<Profile>(defaults),[editing,setEditing]=useState(false),[tab,setTab]=useState("profile"),[notice,setNotice]=useState("");
 useEffect(()=>{setProfile(loadProfile());},[]);
 const groups=Array.from(new Set(profile.links.map(x=>x.group.trim()||"LAINNYA")));
 function openEditor(){setDraft(JSON.parse(JSON.stringify(profile)));setEditing(true);}
 function patch<K extends keyof Profile>(key:K,value:Profile[K]){setDraft(p=>({...p,[key]:value}));}
 function patchLink(id:string,key:keyof LinkItem,value:string){patch("links",draft.links.map(x=>x.id===id?{...x,[key]:value}:x));}
 function save(){setProfile(draft);try{localStorage.setItem("falintino-link-profile",JSON.stringify(draft));setNotice("Perubahan tersimpan di browser ini.");}catch{setNotice("Penyimpanan gagal. Gunakan URL gambar publik.");}setEditing(false);setTimeout(()=>setNotice(""),3000);}
 function addLink(){patch("links",[...draft.links,{id:crypto.randomUUID(),title:"Link baru",url:"https://",group:"LINK UTAMA",icon:"link"}]);}
 return <main className="site-shell">
  {profile.backgroundType==="video"&&profile.background?<video className="background-media" src={profile.background} autoPlay muted loop playsInline/>:profile.background?<div className="background-media" style={{backgroundImage:`linear-gradient(180deg,rgba(0,7,20,.35),rgba(0,0,0,.92)),url("${profile.background}")`}}/>:null}
  <div className="water-texture"/><div className="ambient ambient-one"/><div className="ambient ambient-two"/>
  <button className="edit-trigger" onClick={openEditor}><Settings2 size={17}/> Edit halaman</button>
  <section className="profile-card">
   <div className="top-actions"><span className="sparkle">✳</span><button className="share-button" aria-label="Bagikan" onClick={()=>{navigator.clipboard?.writeText(location.href);setNotice("Alamat halaman siap dibagikan.");setTimeout(()=>setNotice(""),2500);}}>↗</button></div>
   <header className="profile-header"><div className="avatar">{profile.avatar?<img src={profile.avatar} alt={profile.name}/>:<span>F</span>}</div><h1>{profile.name}</h1><p>{profile.bio}</p>
    <div className="social-row">{profile.links.filter(link=>["tiktok","instagram","youtube","facebook","whatsapp","discord","mail","globe"].includes(link.icon)).filter(link=>link.url && !["https://www.youtube.com/","https://youtube.com/","https://wa.me/","https://whatsapp.com/","https://discord.com/","https://facebook.com/"].includes(link.url)).filter((link,index,arr)=>arr.findIndex(item=>item.icon===link.icon)===index).map(link=><a key={link.id} href={link.url} target="_blank" rel="noreferrer" aria-label={link.title} title={link.title}><BrandIcon type={link.icon}/></a>)}</div>
   </header>
   <div className="links-area">{groups.map(group=><section className="link-group" key={group}><h2>{group}</h2>{profile.links.filter(x=>(x.group.trim()||"LAINNYA")===group).map(link=><a className="link-pill" href={link.url} key={link.id} target="_blank" rel="noreferrer"><span className={"link-icon icon-"+link.icon}><BrandIcon type={link.icon}/></span><span className="link-copy"><strong>{link.title}</strong>{link.subtitle&&<small>{link.subtitle}</small>}</span><span className="link-more">⋮</span></a>)}</section>)}</div>
   <footer className="profile-footer"><span>All my links, one place</span><span className="footer-mark">FALINTINO <i>✦</i></span></footer>
  </section><p className="page-note">Satu tempat untuk semua link resmi Falintino.</p>{notice&&<div className="toast">{notice}</div>}
  {editing&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setEditing(false);}}><section className="editor-modal" role="dialog" aria-modal="true">
   <header className="editor-head"><div><span className="eyebrow">FALINTINO STUDIO</span><h2>Edit halaman</h2></div><button className="icon-button" onClick={()=>setEditing(false)}><X/></button></header>
   <nav className="editor-tabs">{[["profile","Profil"],["links","Link"],["appearance","Tampilan"]].map(([id,label])=><button key={id} className={tab===id?"active":""} onClick={()=>setTab(id)}>{label}</button>)}</nav>
   <div className="editor-content">
    {tab==="profile"&&<div className="form-stack"><label>Nama profil<input value={draft.name} onChange={e=>patch("name",e.target.value)}/></label><label>Bio / deskripsi<textarea rows={3} value={draft.bio} onChange={e=>patch("bio",e.target.value)}/></label><label>URL foto profil<input value={draft.avatar} onChange={e=>patch("avatar",e.target.value)} placeholder="https://.../foto.jpg"/></label><p className="helper">Gunakan URL gambar publik HTTPS.</p></div>}
    {tab==="links"&&<div className="form-stack"><button className="add-button" onClick={addLink}><Plus size={16}/> Tambah link</button>{draft.links.map((link,i)=><article className="link-edit-card" key={link.id}><div className="link-edit-top"><strong>Link {i+1}</strong><button className="delete-button" onClick={()=>patch("links",draft.links.filter(x=>x.id!==link.id))}><Trash2 size={15}/> Hapus</button></div><label>Judul<input value={link.title} onChange={e=>patchLink(link.id,"title",e.target.value)}/></label><label>URL tujuan<input value={link.url} onChange={e=>patchLink(link.id,"url",e.target.value)}/></label><div className="two-fields"><label>Kategori<input value={link.group} onChange={e=>patchLink(link.id,"group",e.target.value.toUpperCase())}/></label><label>Ikon<select value={link.icon} onChange={e=>patchLink(link.id,"icon",e.target.value)}>{["link","globe","instagram","youtube","tiktok","facebook","mail","whatsapp","game","community","discord"].map(v=><option key={v}>{v}</option>)}</select></label></div><label>Subjudul (opsional)<input value={link.subtitle||""} onChange={e=>patchLink(link.id,"subtitle",e.target.value)}/></label></article>)}</div>}
    {tab==="appearance"&&<div className="form-stack"><label>Jenis background<select value={draft.backgroundType} onChange={e=>patch("backgroundType",e.target.value as Profile["backgroundType"])}><option value="image">Gambar</option><option value="video">Video</option></select></label><label>{draft.backgroundType==="video"?<><Video size={15}/> URL video background</>:<><ImageIcon size={15}/> URL gambar background</>}<input value={draft.background} onChange={e=>patch("background",e.target.value)} placeholder={draft.backgroundType==="video"?"https://.../background.mp4":"https://.../background.jpg"}/></label><p className="helper">Masukkan URL publik HTTPS. Untuk video gunakan file MP4 yang bisa diakses langsung. Background bawaan memiliki nuansa biru gelap efek air.</p></div>}
   </div><footer className="editor-footer"><button className="cancel-button" onClick={()=>setEditing(false)}>Batal</button><button className="save-button" onClick={save}><Save size={16}/> Simpan perubahan</button></footer>
  </section></div>}
 </main>;
}
