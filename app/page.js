

export default function Home() {

	

  return (
    <section id="home" class="welcome-hero">

			
			<div class="container">
				<div class="welcome-hero-txt">
					<h2>get your desired car in resonable price</h2>
				
					<button  >cars</button>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="model-search-content">
							<div class="row">
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									
									<div class="single-model-search">
										<h2>body style</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">style</option>

											  	<option value="sedan">sedan</option>

											  	<option value="van">van</option>
											  	<option value="roadster">roadster</option>

											</select>
										</div>
									</div>
								</div>
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select make</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">make</option>

											  	<option value="toyota">toyota</option>

											  	<option value="holden">holden</option>
											  	<option value="maecedes-benz">maecedes-benz.</option>

											</select>
										</div>
									</div>
									<div class="single-model-search">
										<h2>car condition</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">condition</option>

											  	<option value="something">something</option>

											  	<option value="something">something</option>
											  	<option value="something">something</option>

											</select>
										</div>
									</div>
								</div>
								<div class="col-md-offset-1 col-md-2 col-sm-12">
									<div class="single-model-search">
										<h2>select model</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">model</option>

											  	<option value="kia-rio">kia-rio</option>

											  	<option value="mitsubishi">mitsubishi</option>
											  	<option value="ford">ford</option>

											</select>
										</div>
									</div>
									<div class="single-model-search">
										<h2>select price</h2>
										<div class="model-select-icon">
											<select class="form-control">

											  	<option value="default">price</option>

											  	<option value="$0.00">$0.00</option>

											  	<option value="$0.00">$0.00</option>
											  	<option value="$0.00">$0.00</option>

											</select>
										</div>
									</div>
								</div>
								<div class="col-md-2 col-sm-12">
									<div class="single-model-search text-center">
										<button class="welcome-btn model-search-btn" >
											search
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
  );
}
