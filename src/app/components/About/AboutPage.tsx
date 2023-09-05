import Image from "next/image";

const About = () => {
  return (
    <>
      <h2 className="font-bold mb-20 text-3xl">About Me</h2>
      <div className="flex flex-about">
        <div className="about-text w-3/5 mr-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Donec in efficitur leo. Vestibulum
            nec magna at dui cursus semper non et dolor. Integer ultrices libero
            sed justo vehicula, at efficitur dui bibendum. Morbi non bibendum
            erat, vel faucibus est. Praesent nec ornare ante, eget ullamcorper
            enim. Donec facilisis turpis vel pharetra cursus. Aenean sit amet
            orci et risus cursus finibus sed eget neque. Nulla facilisi. Mauris
            suscipit, sem eget sollicitudin egestas, orci arcu rhoncus augue, et
            varius est purus non ex.
            <br />
            <br />
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit. Quisque eget nunc eu
            magna facilisis eleifend. Integer lacinia, elit eu dictum facilisis,
            nunc mauris posuere eros, vitae convallis elit erat in est. Sed non
            neque elit. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae.
            <br />
            <br />
          </p>
          <p>
            Curabitur pretium, nisl at aliquet sollicitudin, felis elit vehicula
            arcu, vel tincidunt urna est nec arcu. Suspendisse potenti. Proin id
            laoreet nisi, quis volutpat sapien. Aliquam erat volutpat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus eu tristique lectus. Vivamus at
            ligula quis lectus congue aliquet. Cras consectetur orci at sapien
            pellentesque, ac feugiat purus viverra. Proin sed nisl condimentum,
            interdum ipsum non, viverra orci. Nulla ac lorem tortor.
            <br />
            <br />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor, quam vel tristique interdum, velit urna ultrices risus, nec
            consequat purus dui eget nisi. Suspendisse potenti. Fusce eget nisl
            id tortor dapibus venenatis. Ut vestibulum, libero in fringilla
            vestibulum, risus felis dictum purus, nec tincidunt ipsum orci a
            dui. Nunc ut augue ac leo gravida semper. Quisque sodales, libero
            sed convallis tristique, lectus mi fermentum urna, sit amet sagittis
            nulla nisl vel metus. Nullam et quam nec libero fringilla hendrerit
            et et mauris. Nullam a dolor eu odio semper auctor non quis nisi.
            Nunc vel lacus et arcu gravida pharetra vel non massa. Ut luctus
            bibendum sollicitudin.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/stock-photo.jpg"
            className="profile-img"
            width={612}
            height={408}
            alt={""}
          />
        </div>
      </div>
    </>
  );
};

export default About;
