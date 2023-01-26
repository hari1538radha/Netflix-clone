import React, { useState } from "react";
import TabLABELS from "./constant";
import { Link } from "react-router-dom";

const TabContent = () => {
  const [activeTab, SetActiveTab] = useState(TabLABELS.CancelAtAnyTime);

  const OnClickTab = (tab) => {
    SetActiveTab(tab);
  };
  const { CancelAtAnyTime, PickYpurPrice, WathcAnywhere } = TabLABELS;

  const RenderActiveTab = (TabTitle, id, activeTab, icon) => (
    <div
      onClick={() => OnClickTab(TabTitle)}
      id={id}
      className={`tab-content ${activeTab && "tab-border"}`}
    >
      <i className={icon}></i>

      <h1>{TabTitle}</h1>
    </div>
  );
  return (
    <>
      <section className="total-tabs">
        <div className="tabs1">
          {RenderActiveTab(
            CancelAtAnyTime,
            "tab-1",
            activeTab === CancelAtAnyTime,
            "fas fa-door-open fa-3x"
          )}
          {RenderActiveTab(
            PickYpurPrice,
            "tab-2",
            activeTab === PickYpurPrice,
            "fas fa-tablet-alt fa-3x"
          )}
          {RenderActiveTab(
            WathcAnywhere,
            "tab-3",
            activeTab === WathcAnywhere,
            "fas fa-tags fa-3x"
          )}
        </div>
      </section>
      {activeTab === CancelAtAnyTime && (
        <section>
          <div
            id="tab1content"
            className={`"tab-contents" ${
              activeTab === CancelAtAnyTime && "show"
            }`}
          >
            <div>
              <div>
                <p>
                  if you decide Netflix is not for you no problem no commitment.
                  Cancel online anytime
                </p>
                <Link to="/netflix-banner">Watch netflix free for 30 days</Link>
                <div>
                  <img
                    src="https://vod.mysky.com.ph/assets/images/netflix.png"
                    alt="image "
                  ></img>
                  <img src="https://1.bp.blogspot.com/-mS6aAFQXCFI/XtgV-sc-ARI/AAAAAAAAADc/zx4kyU35Mvo8wxg5lqiHLw2BFHFMsfJrQCK4BGAsYHg/s438/tab-1-Cancel.png"></img>
                </div>
              </div>
            </div>
          </div>
       
        </section>
      )}
      {activeTab === WathcAnywhere && (
        <section>
          <div
            id="tab2content"
            className={`"tab2-contents" ${
              activeTab === WathcAnywhere && "show"
            }`}
          >
            <div>
              {" "}
              <p>whatch TV shows and movies anytime ,anywhere.</p>
              <Link to="/netflix-banner">Watch netflix free for 30 days</Link>
            </div>
            <div>
              {" "}
              <p>Watch on TV</p> <Link to="/netflix-banner">Watch Now</Link>
            </div>

            <div>
              <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"></img>
              <div>
                {" "}
                <p>Watch on laptops</p>
                <Link to="/netflix-banner">Watch Now</Link>
              </div>

              <img src="https://www.turnkeytown.com/products/img/pro/netflix-clone-script/netflix-clone-script-slider.png"></img>
              <div>
                {" "}
                <p>Watch on mobile phones</p>
                <Link to="/netflix-banner">Watch Now</Link>
              </div>
              <img src="https://www.codemade.io/wp-content/uploads/2020/01/netflix-clone-netflix-clone-app-video-streaming-app-clone-157985925248kng.png"></img>
            </div>
          </div>
        </section>
      )}
      {activeTab === PickYpurPrice && (
        <section>
          <div>Choose the plan that's right for you</div>
          <p>Downgrade or Upgrade your plans anytime</p>
          <div>
            <span>Basic</span>
            <span>Standard</span>
            <span>Premium</span>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price after free month ends on 6/19/19</td>
                <td>$8.99</td>
                <td>$12.99</td>
                <td>$15.99</td>
              </tr>
              <tr>
                <td>HD Available</td>
                <td>
                  <i class="fas fa-times"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>Ultra HD Available</td>
                <td>
                  <i class="fas fa-times"></i>
                </td>
                <td>
                  <i class="fas fa-times"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your laptop, TV, phone and tablet</td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <td>First month free</td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
                <td>
                  <i class="fas fa-check"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default TabContent;
